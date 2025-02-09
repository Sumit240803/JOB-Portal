// Profile Schema
const mongoose = require("mongoose")
const profileSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    bio: { type: String },
    experience: [
        {
            company: String,
            jobTitle: String,
            years: Number,
            description: String
        }
    ],
    skills: [String],
    education: [
        {
            degree: String,
            institution: String,
            yearOfCompletion: Number
        }
    ],
    resume: { type: String }, // URL to uploaded resume
    socialLinks: {
        linkedin: String,
        github: String,
        portfolio: String
    },
    createdAt: { type: Date, default: Date.now }
});

const Profile = mongoose.model("Profile", profileSchema);
module.exports = Profile;
