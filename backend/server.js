const express = require("express")
const cors = require("cors")
require("dotenv").config()
const cookie = require("cookie-parser")
const app = express();
app.use(express.json())
app.use(cors())
app.use(cookie());



app.listen(process.env.PORT , ()=>{
    console.log(`Server Running at ${process.env.PORT }`)
})