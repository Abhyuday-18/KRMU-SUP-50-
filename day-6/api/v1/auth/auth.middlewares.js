const validateSignup = (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email) {
            return res.status(400).json({ message: "Email is required" });
        }

        if (!password) {
            return res.status(400).json({ message: "Password is required" });
        }

        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters long" });
        }

        next();
    } catch (error) {
        console.error("Validation Error:", error);
        res.status(500).json({ message: "Internal server error during validation" });
    }
};

module.exports = { validateSignup };
