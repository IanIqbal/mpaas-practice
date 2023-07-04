const jwt = require("jsonwebtoken")
const {User} = require("../models")

const refreshAuthentication = async (req,res,next) =>{
    try {
        console.log(req.headers.refresh_token);
        if(!req.headers.refresh_token){
            throw {name:"Unauthorized"}
        }

        let refresh_token = req.headers.refresh_token


        let checkToken = jwt.verify(refresh_token, process.env.SECRET, (error, decoded)=>{
            if(error){
                if(error.name == "TokenExpiredError"){
                    console.log(error.name, "<<<<<<<< name");
                    return {name:"Expired"}
                }else{
                    return {name:"Unauthorized"}
                }
            }else{
                return decoded
            }
        })

        if(checkToken.name == "Unauthorized" || checkToken.name == "Expired"){
            throw {name:checkToken.name}
        }
        console.log("TEST");
        let {id} = checkToken
        let user = await User.findByPk(id)

        if(!user){
            throw {name:"Unauthorized"}
        }

        req.user = {id:user.dataValues.id}

        next()
    } catch (error) {
        console.log(error,"<<<<<< dari catch");
        
        next(error)
    }
}

module.exports = refreshAuthentication