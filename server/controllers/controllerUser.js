const { User } = require("../models")
const jwt = require("jsonwebtoken")
const bcryptjs = require("bcryptjs")
class ControllerUser {
    static async createUser(req, res, next) {
        try {
            const { username, password } = req.body

            await User.create({ username, password })

            res.status(201).json({
                message: "User Successfully created"
            })
        } catch (error) {
            next(error)
        }
    }
    static async login(req, res, next) {
        try {

            const { username, password } = req.body

            if(!username || !password){
                throw {name:"Invalid", value:"Invalid Input"}
            }
            
            let user = await User.findOne({ where: { username } })
            
            if(!user){
                throw {name:"Invalid", value:"Wrong username/password"}
            }

            let checkPassword = bcryptjs.compareSync(password, user.password)

            if(!checkPassword){
                throw {name:"Invalid", value:"Wrong username/password"}
            }
            
            let accessToken = jwt.sign({ id: user.id }, process.env.SECRET, { expiresIn: "60000ms" })
            let refreshToken = jwt.sign({ id: user.id }, process.env.SECRET, { expiresIn: "120000ms" })
            let { rekening, saldo } = user
            res.status(200).json({
                accessToken,
                refreshToken,
                username,
                isAgree: user.isAgree
            })
        } catch (error) {
            next(error)
        }
    }

    static async getUserData(req, res, next) {
        try {

            let { id } = req.user

            let user = await User.findByPk(id)
            if(!user){
                throw {name:"Not Found"}
            }
            let { rekening, saldo, username, isAgree } = user
            // console.log(user);
            // console.log(isAgree);
            res.status(200).json({ rekening, saldo, username, isAgree })
        } catch (error) {
            next(error)
        }
    }

    static async refreshAccessToken(req, res, next) {
        try {
            let { id } = req.user

            let newAccessToken = jwt.sign({ id }, process.env.SECRET, { expiresIn: "60000ms" })
            console.log("token refreshed");
            res.status(200).json({ accessToken: newAccessToken })
        } catch (error) {
          
            next(error)
        }
    }

    static async updateStatus(req, res, next) {
        try {
            let { id } = req.user
            let user = await User.findByPk(id)
            if(!user){
                throw {name:"Not Found"}
            }
            await User.update({ isAgree: true }, { where: { id } })

            res.status(201).json({ message: `User id ${id} status successfully changed` })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = ControllerUser