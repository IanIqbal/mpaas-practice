const express = require("express")
const ControllerGame = require("../controllers/controllerGame")
const authentication = require("../middlewares/authentication")
const router = express.Router()

// router.post("/", authentication,ControllerGame.createSaveData)
// router.get("/",authentication, ControllerGame.getSaveData)

router.post("/",ControllerGame.createSaveData)
router.get("/", ControllerGame.getSaveData)

module.exports = router