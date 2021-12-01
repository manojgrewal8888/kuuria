const express = require("express");
const router = express.Router();
const Event = require("../../models/Event");
const EventCategory = require("../../models/EventCategory");
const Nominee = require("../../models/Nominee");

router.get('/event', function(req, res) {
    Event.find({is_approved: 2}).then(event => {
        if (event.length > 0) {
            return res.json(event);
        } else {
            return res.json('events not found');
        }
    });
});
router.get('/event_category', function(req, res) {
    let err = {};
    if (!(req.body && req.body.event_id)) {
        err.event_id = 'event_id is required';
    }
    if (err && err.event_id) {
        return res.status(400).json(err);
    }
    EventCategory.find({event_id: req.body.event_id}).then(eventcategory => {
        if (eventcategory.length > 0) {
            return res.json(eventcategory);
        } else {
            return res.json('event category not found');
        }
    });
});
router.get('/nominee', function(req, res) {
    let err = {};
    if (!(req.body && req.body.category_id)) {
        err.category_id = 'category_id is required';
    }
    if (err && err.category_id) {
        return res.status(400).json(err);
    }
    Nominee.find({category_id: req.body.category_id}).then(nominee => {
        if (nominee.length > 0) {
            return res.json(nominee);
        } else {
            return res.json('nominee not found');
        }
    });

});
module.exports = router;