const mongoose = require("mongoose")

const application = mongoose.Schema({
    company : String,
    jobRole : String,
    description : String
})