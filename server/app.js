const express = require("express")
const app = express()
require('dotenv').config()
const port = process.env.PORT || 3001
const cors = require("cors")
const router = require("./routes")

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.use("/",router)


app.listen(port,()=>{
console.log("server run on port 3001");
})