const express = require("express")
const router = express.Router()

const userRouter = require("./user")
const transactionRouter = require("./transaction")
const investRouter = require("./company")
const gameRouter = require("./game")

const errorHandler = require("../middlewares/errorHandler")
router.get("/", (req,res)=>{
    console.log("gettt");
    res.status(200).json("ok dari backend    ian")})

router.use("/game", gameRouter)
router.use("/users", userRouter)
router.use("/transactions", transactionRouter)
router.use("/companies", investRouter)

router.use(errorHandler)

module.exports = router