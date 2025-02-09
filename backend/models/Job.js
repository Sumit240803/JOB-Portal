const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    company: { type: mongoose.Schema.Types.ObjectId, ref: "Company", required: true },
    location: { type: String, required: true }, 
    salary: { type: String }, 
    employmentType: { 
        type: String, 
        enum: ["Full-time", "Part-time", "Contract", "Internship"],
        required: true
    },
    requirements: [{ type: String }], 
    benefits: [{ type: String }], 
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, 
    applicants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    createdAt: { type: Date, default: Date.now }
});

const Job = mongoose.model("Job", jobSchema);
module.exports = Job;
