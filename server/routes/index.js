const express = require("express")
const router = express.Router()

const userRouter = require("./user")
const transactionRouter = require("./transaction")
const investRouter = require("./company")
const errorHandler = require("../middlewares/errorHandler")
router.get("/", (req,res)=>{
    console.log("gettt");
    res.status(200).json("ok")})

router.post("/", (req,res)=>{
    console.log(req.body, "<<<<<<<<<<<<reqbody");
    res.status(200).json("post oke")
})
router.use("/users", userRouter)
router.use("/transactions", transactionRouter)
router.use("/companies", investRouter)

router.use(errorHandler)

module.exports = router