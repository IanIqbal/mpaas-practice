const errorHandler = (err, req, res, next) =>{
    let status = 500
    let message = "Internal Server Error"
    console.log(err,"<<<<errorhandler");

    switch (err.name) {
        case "Unauthorized":
            status = 401
            message = "You Have to Login"
            break;
        case "Expired":
            status = 401
            message = "Your session is over"
            break;
        case "SequelizeValidationError":
        case "SequelizeUniqueConstraintError":
            status = 400
            message = err.errors[0].message
            break;
        case "Not Found":
            status = 404
            message = "Data Not Found"
            break;
        case "Insufficient":
            status = 400
            message = "Insufficient Balance"
            break;
        case "Invalid":
            status = 400
            message = err.value
        default:
            break;
    }
    res.status(status).json({message})
}

module.exports = errorHandler