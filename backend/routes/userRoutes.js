const express = require("express");
const Profile = require("../models/Profile");
const User = require("../models/User");
const { protect } = require("../middlewares/authMiddleware");


const userRouter = express.Router();

// Create or Update User Profile
userRouter.post("/profile", protect, async (req, res) => {
    try {
        const userId = req.user.id; // Extract user ID from token
        const {
            bio,
            experience,
            skills,
            education,
            resume,
            socialLinks
        } = req.body;

        // Check if the user already has a profile
        let profile = await Profile.findOne({ user: userId });

        if (profile) {
            // Update existing profile
            profile.bio = bio || profile.bio;
            profile.experience = experience || profile.experience;
            profile.skills = skills || profile.skills;
            profile.education = education || profile.education;
            profile.resume = resume || profile.resume;
            profile.socialLinks = socialLinks || profile.socialLinks;

            await profile.save();
            return res.status(200).json({ message: "Profile updated", profile });
        }

        // Create new profile
        profile = new Profile({
            user: userId,
            bio,
            experience,
            skills,
            education,
            resume,
            socialLinks
        });

        await profile.save();

        // Update user model with profile reference
        await User.findByIdAndUpdate(userId, { profile: profile._id });

        res.status(201).json({ message: "Profile created", profile });

    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

module.exports = userRouter;
