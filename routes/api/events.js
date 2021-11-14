const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
// Load input validation 
const validateEventInput = require("../../validation/events");
// Load User model
const Event = require("../../models/Event");


// @route POST api/users/register
// @desc Register user 
// @access Public
router.post("/addevent", (req, res) => {
    // Form validation
  const { errors, isValid } = validateEventInput(req.body);
  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  Event.findOne({ _id: req.body.id }).then(user => {
      if (user) {
        return res.status(400).json({ email: "Event already exists" });
      } else {
        const newEvent = new Event({
          eventname: req.body.eventname,
          start_date: req.body.start_date,
          end_date: req.body.end_date
        }); 
          newEvent
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err)); 
      }
    });
  });
 

module.exports = router;