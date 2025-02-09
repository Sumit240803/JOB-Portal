const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    applied: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Application",
        }
    ],
    profile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Profile",
    },
    createdAt: { type: Date, default: Date.now }
});

// Hash password before saving
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    
    try {
        const salt = await bcrypt.genSalt(10);
        this.password =  bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});


const User = mongoose.model("User", userSchema);
module.exports = User;
