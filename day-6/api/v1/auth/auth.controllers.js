const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../../../models/usersSchema.js");

const signupController = async (req, res) => {
    try {
        const { email, password } = req.body;

        // if (!email || !password) {
        //     return res.status(400).json({ message: "Email and password are required" });
        // }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            email,
            password: hashedPassword,
            runValidators: true,
        });

        res.status(201).json({ message: "User created successfully", userId: newUser._id });
    } catch (error) {
        console.error("Signup Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const loginController = async (req, res) => {
   try {
    const { email, password } = req.body;

    const user = await User.findOne({email : email });
    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found",
        });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({
            success: false,
            message: "Invalid password",
        });
    }
    const token = jwt.sign({ email: user.email, id: user._id }, process.env.JWT_SECRET, {expiresIn: "1h"});
    res.cookie("authorization", token, {maxAge: 3600000, httpOnly: true,secure:true});
    res.status(200).json({
        success: true,
        message: "Login successful",
        token,
    });
   } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Internal server error" });
   }
} 
module.exports = { signupController, loginController };
