const express = require("express")
const ControllerUser = require("../controllers/controllerUser")
const authentication = require("../middlewares/authentication")
const refreshAuthentication = require("../middlewares/RefreshAuthentication")
const errorHandler = require("../middlewares/errorHandler")
const router = express.Router()


router.get("/",authentication, ControllerUser.getUserData)
router.post("/register", ControllerUser.createUser)
router.post("/login", ControllerUser.login)
router.patch("/status",authentication, ControllerUser.updateStatus)
router.get("/refreshAccess", refreshAuthentication, ControllerUser.refreshAccessToken )

router.use(errorHandler)
module.exports = router