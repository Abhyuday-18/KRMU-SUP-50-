const validateCreatePlayerDto = (req, res, next) => {
    const data = req.body;

    if (!data.username) {
        res.status(400);
        res.json({
            success: false,
            message: "Username is required",
        });
        return;
    }
    if (!data.email) {
        res.status(400);
        res.json({
            success: false,
            message: "Email is invalid!",
        });
        return;
    }
    if (!data.name) {
        res.status(400);
        res.json({
            success: false,
            message: "Name is required",
        });
        return;
    }

    next();
};

module.exports = { validateCreatePlayerDto };
