const express = require("express")
const router = express.Router()
const authentication = require("../middlewares/authentication")
const ControllerTransaction = require("../controllers/controllerTransaction")

console.log("transaction route");

router.post("/", authentication,ControllerTransaction.createTransaction)
router.get("/", authentication, ControllerTransaction.getTransactions)

module.exports = router