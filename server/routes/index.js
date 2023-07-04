const express = require("express")
const router = express.Router()

const userRouter = require("./user")
const transactionRouter = require("./transaction")

router.get("/", (req,res)=>{res.status(200).json({message:"ok"})})

router.use("/users", userRouter)
router.use("/transactions", transactionRouter)

module.exports = router