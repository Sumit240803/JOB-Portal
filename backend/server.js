const express = require("express")
const cors = require("cors")
require("dotenv").config()
const cookie = require("cookie-parser");
const authRouter = require("./routes/authRoutes");
const { default: mongoose } = require("mongoose");
const app = express();
app.use(express.json())
app.use(cors())
app.use(cookie());
app.use("/api/auth",authRouter);
mongoose.connect(process.env.DB).then(()=>console.log("DB connected")).catch((err)=>console.log("Error : ", err));

app.listen(process.env.PORT , ()=>{
    console.log(`Server Running at ${process.env.PORT }`)
})