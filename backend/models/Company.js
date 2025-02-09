const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    industry: { type: String, required: true }, // e.g., IT, Healthcare, Finance
    location: { type: String, required: true },
    website: { type: String },
    logo: { type: String }, // URL to company logo
    jobs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Job" }], // Reference to jobs posted
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // HR/Admin user
    createdAt: { type: Date, default: Date.now }
});

const Company = mongoose.model("Company", companySchema);
module.exports = Company;
