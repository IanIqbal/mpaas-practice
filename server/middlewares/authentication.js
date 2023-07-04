const jwt = require("jsonwebtoken")
const { User } = require("../models")
const authentication = async (req, res, next) => {
    try {
        console.log(req.headers);
        if (!req.headers.access_token) {
            throw { name: "Unauthorized" }
        }

        let accessToken = req.headers.access_token
        // let refreshToken = req.headers.refresh_token

        // let checkRefreshToken = jwt.verify(refreshToken, process.env.SECRET, (error, decoded) => {
        //     if (error.name = "TokenExpiredError") {
        //         return { name: "Expired" }
        //     } else {
        //         return decoded
        //     }
        // })

        // if(checkRefreshToken.name == "Expired"){
        //     throw checkRefreshToken
        // }

        // let refreshTokenId = checkToken.id
        // let refreshTokenUser = await User.findByPk(id)
        // if (!refreshTokenUser) {
        //     throw { name: "Unauthorized" }
        // }

        let checkToken = jwt.verify(accessToken, process.env.SECRET, (error, decoded) => {
            if (error) {
                // if (error.name = "TokenExpiredError") {
                    
                //     let newAccessToken = jwt.sign({id:refreshTokenId}, process.env.SECRET, {expiresIn:"60000ms"})
                    
                //     return {name:"New Token", newAccessToken}
                // }else{
                    
                    return { name: "Unauthorized" }
                // }
            } else {
                console.log(decoded);
                return decoded
            }
        })


        if (checkToken.name == "Unauthorized") {
            throw checkToken
        }

        let { id } = checkToken
        let user = await User.findByPk(id)
        if (!user) {
            throw { name: "Unauthorized" }
        }

        req.user = { id: user.dataValues.id }

        next()
    } catch (error) {
        console.log(error);
        next(error)
    }
}

module.exports = authentication