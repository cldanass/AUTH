const express = require("express");
const router = express.Router();

// Only admin can access
router.get("/admin", (req, res) => {
    res.json({
        message: "Welcome Admin"
    });
});

// Manager access
router.get("/manager", (req, res) => {
    res.json({
        message: "Welcome Manager"
    });
});

// User access
router.get("/user", (req, res) => {
    res.json({
        message: "Welcome User"
    });
});

module.exports = router;
