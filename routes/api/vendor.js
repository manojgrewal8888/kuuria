const express = require("express");
const router = express.Router();
const validateCategoryInput = require("../../validation/eventcategory");
const Event = require("../../models/Event");
const Voter = require("../../models/Voter");
const EventCategory = require("../../models/EventCategory");
const Ticket = require("../../models/Ticket");
const Question = require("../../models/vendor/Question");
const validateTicketInput = require("../../validation/createTicket");
const validateQuestionInput = require("../../validation/vendor/question");
const validateUpdateQuestionInput = require("../../validation/vendor/updatequestion");
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
      number: req.body.number,
      user_id: req.body.user_id,
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
router.post('/ticket_list', async function(req,res) {
  let errors = {};
    if (!req.body.user_id) {
      errors.user_id = "user_id id is required";
    }
    if (!_.isEmpty(errors)) {
      return res.status(400).json(errors);
    }
  Ticket.find({user_id: req.body.user_id}).then(ticket=>{
      return res.json(ticket);
  });
});
router.get('/get_ticket', function(req, res) {
  let errors = {};
  if (!(req.body && req.body.ticket_id)) {
      errors.ticket_id = 'ticket_id is required !';
  }
  if (!_.isEmpty(errors)) {
    return res.status(400).json(errors);
  }
  Ticket.findOne({_id: req.body.ticket_id}).then(ticket=> {
    if (ticket) {
      return res.json(ticket);
    } else {
      return res.status(200).json('ticket not found');
    }
  });
});
router.post('/add_question', function(req, res) { 
   const { errors, isValid } = validateQuestionInput(req.body);
   // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

    let question = new Question({
      user_id: req.body.user_id,
      question: req.body.question,
      status: req.body.status 
    });

    question.save().then(question => res.json(question)).catch(err => console.log(err));
});
router.post('/get_all_question', function(req, res) {
  let errors = {};
  
    if (!req.body.user_id) {
      errors.user_id = "user_id is required";
    }
    if (!_.isEmpty(errors)) {
      return res.status(400).json(errors);
    }
    Question.find({user_id: req.body.user_id}).then(question=>{
      if (question.length > 0) {
        return res.status(200).json(question);
      } else {
        return res.status(200).json('');
      }
  });
});
router.post('/view_question', function(req, res) {
  let errors = {};  
    if (!req.body.question_id) {
      errors.question_id = "question_id is required";
    }
    if (!_.isEmpty(errors)) {
      return res.status(400).json(errors);
    }
    Question.findOne({_id: req.body.question_id}).then(question=>{
      if (question) {
        return res.status(200).json(question);
      } else {
        return res.status(200).json('question not found');
      }
   });
});
router.get('/delete_question', function(req, res) {
  let errors = {};
    if (!req.body.question_id) {
      errors.question_id = "question id is required";
    }
    if (!_.isEmpty(errors)) {
      return res.status(400).json(errors);
    }
    Question.deleteOne({ _id: ObjectId(req.body.question_id) }, function (err, results) {
      if (err) {
          console.log(err);
      } else {
          return res.status(200).json('question deleted successfully');
      }
  });
});
router.post('/update_question', function(req, res) {
  const { errors, isValid } = validateUpdateQuestionInput(req.body);
  // Check validation
   if (!isValid) {
     return res.status(400).json(errors);
   }
   let question = {
     question: req.body.question,
     status: req.body.status
    };
    Question.updateOne({_id: ObjectId(req.body.question_id)}, {$set:question},{upsert: true }, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            return res.status(200).json('question updated successfully');
        }
    });
});
router.get('/total_votes', async function(req, res) {
  const err = {};
    if (!(req.body && req.body.vendor_id)) {
        err.vendor_id = 'vendor_id is required';
    }
    if (err.hasOwnProperty('vendor_id')) {
        return res.status(400).json(err);
    }
    let event_id = [];
    await Event.find({user_id: req.body.vendor_id}).select('_id').then(event => {
      if (event.length > 0) {
        for (let i=0; i < event.length; i++) {
          event_id.push(event[i]._id);
        }
      } else {
        return res.status(400).json('no event found');
      }
    });
    if (event_id.length > 0) {
      let total_voters = await Voter.find({event_id: {$in : event_id}}).count();
      return res.status(200).json({'total_voters': total_voters});
    }
});
module.exports = router;