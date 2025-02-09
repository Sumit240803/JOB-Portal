
const applicationSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    company: { type: String, required: true },
    jobRole: { type: String, required: true },
    description: { type: String },
    status: { 
        type: String, 
        enum: ["applied", "interview", "rejected", "hired"], 
        default: "applied" 
    },
    appliedAt: { type: Date, default: Date.now }
});

const Application = mongoose.model("Application", applicationSchema);
module.exports = Application;
