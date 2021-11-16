const express = require("express");
const router = express.Router();
const validateCategoryInput = require("../../validation/eventcategory");
const EventCategory = require("../../models/EventCategory");
const Ticket = require("../../models/Ticket");
const validateTicketInput = require("../../validation/createTicket");
const _ = require('lodash');
const {ObjectId} = require('mongodb');

router.get('/category_list', async function(err,res) {
    EventCategory.find({}).then(category=>{
        return res.json(category);
    });
});
router.post('/add_category', function(req, res) {
    const { errors, isValid } = validateCategoryInput(req.body);
  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

    let category = new EventCategory({
        event_id: req.body.event_id,
        title: req.body.title,
        description: req.body.description
    });
    category.save().then(cat => res.json(cat)).catch(err => console.log(err));
});
router.post('/edit_category', function(req, res) {
    let errors = {};
      if (!req.body.category_id) {
        errors.category_id = "category id is required";
      }
      if (!req.body.title) {
        errors.title = "title field is required";
      }
      if (!req.body.description) {
        errors.description = "description field is required";
      }
      if (!req.body.event_id) {
        errors.event_id = "event_id field is required";
      }
      if (!_.isEmpty(errors)) {
        return res.status(400).json(errors);
      }

    let category = {
        event_id: req.body.event_id,
        title: req.body.title,
        description: req.body.description
    };
    EventCategory.updateOne({_id: ObjectId(req.body.category_id)}, {$set:category},{upsert: true }, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            return res.status(200).json('event category updated successfully');
        }
    });
});

router.get('/delete_category', function(req, res) {
    let errors = {};
      if (!req.body.category_id) {
        errors.category_id = "category id is required";
      }
      if (!_.isEmpty(errors)) {
        return res.status(400).json(errors);
      }
    EventCategory.deleteOne({ _id: ObjectId(req.body.category_id) }, function (err, results) {
        if (err) {
            console.log(err);
        } else {
            return res.status(200).json('event category deleted successfully');
        }
    });
});

router.post('/create_ticket', function(req, res) {
  const { errors, isValid } = validateTicketInput(req.body);
  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    let ticket = new Ticket({
      name: req.body.name,
      date: req.body.date,
      time: req.body.time,
      price_votes: req.body.price_votes,
      venue: req.body.venue,
      number: req.body.number
    });
    ticket.save().then(ticket => res.json(ticket)).catch(err => console.log(err));
});

router.get('/delete_ticket', function(req, res) {
  let errors = {};
    if (!req.body.ticket_id) {
      errors.ticket_id = "ticket id is required";
    }
    if (!_.isEmpty(errors)) {
      return res.status(400).json(errors);
    }
    Ticket.deleteOne({ _id: ObjectId(req.body.ticket_id) }, function (err, results) {
      if (err) {
          console.log(err);
      } else {
          return res.status(200).json('ticket deleted successfully');
      }
  });
});
router.get('/ticket_list', async function(err,res) {
  Ticket.find({}).then(ticket=>{
      return res.json(ticket);
  });
});

module.exports = router;