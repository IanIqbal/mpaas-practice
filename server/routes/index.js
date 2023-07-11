const express = require("express")
const router = express.Router()

const userRouter = require("./user")
const transactionRouter = require("./transaction")
const investRouter = require("./company")
const errorHandler = require("../middlewares/errorHandler")

router.get("/", (req,res)=>{res.status(200).json({message:"ok"})})

router.use("/users", userRouter)
router.use("/transactions", transactionRouter)
router.use("/companies", investRouter)

router.use(errorHandler)

module.exports = router