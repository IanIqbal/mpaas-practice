const express = require("express")
const router = express.Router()
const errorHandler = require("../middlewares/errorHandler")
const authentication = require("../middlewares/authentication")
const ControllerInvest = require("../controllers/controllerInvest")

router.get("/", authentication,ControllerInvest.getMainStock )
router.get("/:symbol", authentication, ControllerInvest.getStockDetail)

module.exports = router