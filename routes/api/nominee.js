const express = require("express");
const router = express.Router();
const Nominee = require("../../models/Nominee");

router.post('/add_nominee', function (req, res) {
    const { errors, isValid } = validateEventInput(req.body);
});
module.exports = router;