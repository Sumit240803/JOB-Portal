const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    firstname : String,
    lastname : String,
    password : String,
    applied : [
        {
            type: mongoose.Schema.Types.ObjectId
        }
    ]
})