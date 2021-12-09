const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const multer = require('multer');
// Load input validation 
const validateEventInput = require("../../validation/events");
const validateViewEventInput = require("../../validation/viewevents");
const validateEditEventInput = require("../../validation/editevents");
const validateFilterEventInput = require("../../validation/eventFilterByStatus");
const validateSearchEventInput = require("../../validation/events/eventSearchByName");
const validateOrganisationInput = require("../../validation/events/organisation");
const validateGetAppearanceInput = require("../../validation/events/getappearance");
const validateAppearanceInput = require("../../validation/events/appearance");
// Load User model
const Event = require("../../models/Event");
const EventOrganisation = require("../../models/EventOrganisation");
const EventAppearance = require("../../models/EventAppearance");
const Nominee = require("../../models/Nominee");
var storage = multer.diskStorage({
  destination: function(req, file, callback) {
      callback(null, 'uploads/events');
    },
    filename: function(req, file, callback) {
      if(file.originalname.length>6)
        callback(null, file.fieldname + '-' + Date.now() + file.originalname.substr(file.originalname.length-6,file.originalname.length));
      else
        callback(null, file.fieldname + '-' + Date.now() + file.originalname);
  
    }
});
const upload = multer({ storage: storage });
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
          end_date: req.body.end_date,
          status: req.body.status || 1,
          published: req.body.published || 1,
          timezone: req.body.timezone,
          user_id: req.body.user_id,
        }); 
          newEvent
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err)); 
      }
    });
  });
  router.post('/viewevent', (req, res) => { 
    const { errors, isValid } = validateViewEventInput(req.body);
    // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    Event.findOne({_id: req.body.event_id}).then(event=>{
      if (event) {
        return res.status(200).json(event);
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
        status: req.body.status || 1,
        published: req.body.published || 1,
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
  router.get('/filter_by_status', function(req, res) {
        const { errors, isValid } = validateFilterEventInput(req.body)
        if (!isValid) {
          return res.status(400).json(errors);
        }
        Event.find({status: req.body.status}).then(event=>{
          if (event.length > 0) {
            return res.json(event);
          } else {
            return res.json('event not found');
          }
        });
  });
  router.get('/search_by_name', async function(req, res) {
    const { errors, isValid } = validateSearchEventInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    Event.find({eventname: {'$regex': req.body.event_name}}).then(event=>{
      if (event.length > 0) {
        return res.json(event);
      } else {
        return res.json('event not found');
      }
    });
  });  
  router.post('/organisation', function(req, res) {
        const {errors, isValid} = validateOrganisationInput(req.body);
        if (!isValid) {
          return res.status(400).json(errors);
        }
        EventOrganisation.findOne({event_id: req.body.event_id}).then(event=>{
          if (event) {
            let organisation = {
              name: req.body.name,
              subdomain: req.body.subdomain
             };
             EventOrganisation.updateOne({event_id: req.body.event_id}, {$set:organisation},{upsert: true }, function(err, result) {
                 if (err) {
                     console.log(err);
                 } else {
                     return res.status(200).json('organisation updated successfully');
                 }
             });
          } else {
            const newEventOrganisation = new EventOrganisation({
              event_id: req.body.event_id,
              name: req.body.name,
              subdomain: req.body.subdomain
            }); 
            newEventOrganisation
                .save()
                .then(organisation => res.json(organisation))
                .catch(err => console.log(err)); 
          }
        });
  });
  router.get('/get_organisation', function(req, res) {
    const {errors, isValid} = validateGetOrganisationInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    EventOrganisation.findOne({event_id: req.body.event_id}).then(event=>{
      if (event) {
        return res.json(event);
      } else {
        return res.json('event organisation not found');
      }
    });
  });
  router.get('/get_appearance', function(req, res) {
    const {errors, isValid} = validateGetAppearanceInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    EventAppearance.findOne({event_id: req.body.event_id}).then(event=>{
      if (event) {
        return res.json(event);
      } else {
        return res.json('event appearance not found');
      }
    });
  });
  router.post('/appearance', upload.fields([{
        name: 'logo', maxCount: 1
      }, {
        name: 'banner', maxCount: 1
      }]), function(req, res) {
        const {errors, isValid} = validateAppearanceInput(req.body);
        if (!isValid) {
          return res.status(400).json(errors);
        }
        let logo = req.files.logo[0].path;
        let banner = req.files.banner[0].path;
        EventAppearance.findOne({event_id: req.body.event_id}).then(event=>{
          if (event) { 
            let appearance = {
              logo: logo,
              banner: banner,
              color: req.body.color
             };
             EventAppearance.updateOne({event_id: req.body.event_id}, {$set:appearance},{upsert: true }, function(err, result) {
                 if (err) {
                     console.log(err);
                 } else {
                     return res.status(200).json('appearance updated successfully');
                 }
             });
          } else {
            const newEventAppearance = new EventAppearance({
              event_id: req.body.event_id,
              logo: logo,
              banner: banner,
              color: req.body.color
            }); 
            newEventAppearance
                .save()
                .then(appearance => res.json(appearance))
                .catch(err => console.log(err));
          }
        });
  });

  router.post('/total_votes', async function(req, res) {
    const err = {};
    if (!(req.body && req.body.event_id)) {
        err.event_id = 'event_id is required';
    }
    if (err.hasOwnProperty('event_id')) {
        return res.status(400).json(err);
    }
  });
  router.post('/all_approve_events', function(req, res) {
    Event.find({is_approved: 2}).sort({date:-1}).then(events => {
      if (events.length > 0) {
        return res.status(200).json(events);
      } else {
        return res.status(404).json('no event found !');
      }
    });
  });
module.exports = router;