const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
// Load input validation 
const validateEventInput = require("../../validation/events");
const validateViewEventInput = require("../../validation/viewevents");
const validateEditEventInput = require("../../validation/editevents");
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
  router.get('/viewevent', (req, res) => {
    const { errors, isValid } = validateViewEventInput(req.body);
    // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    Event.findOne({_id: req.body.event_id}).then(event=>{
      if (event) {
        return res.json(event);
      } else {
        return res.json('event not found');
      }
    });
  });
  router.post('/editevent', (req, res) => {
    const { errors, isValid } = validateEditEventInput(req.body);
    // Check validation
      if (!isValid) {
        return res.status(400).json(errors);
      }
      let event = {
        event_id: req.body.event_id,
        eventname: req.body.eventname,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        timezone: req.body.timezone,
      };
      Event.updateOne({_id: req.body.event_id}, {$set:event},{upsert: true }, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            return res.status(200).json('event updated successfully');
        }
    });
  });
  router.get('/delete', function(req, res) {
    const { errors, isValid } = validateViewEventInput(req.body);
    // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    Event.deleteOne({ _id: req.body.event_id }, function (err, results) {
      if (err) {
          console.log(err);
      } else {
          return res.status(200).json('event deleted successfully');
      }
    });
  });
 

module.exports = router;