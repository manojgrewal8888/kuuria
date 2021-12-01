const express = require("express");
const router = express.Router();
const Event = require("../../models/Event");
const User = require("../../models/User");

router.post('/event_approve', function(req, res) {
    let err = {};
    if (!(req.body && req.body.event_id)) {
        err.event_id = 'event_id is required';
    }
    if (!(req.body && req.body.is_approve)) {
        err.is_approve = 'is_approve is required';
    }

    if (err && (err.event_id || err.is_approve)) {
        return res.status(400).json(err);
    }

    Event.updateOne({_id: req.body.event_id}, {$set:{is_approved: req.body.is_approve}},{upsert: true }, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            if (req.body.is_approve == 2) {
                return res.status(200).json('event approved successfully');
            } else if (req.body.is_approve == 3) {
                return res.status(200).json('event disapproved successfully');
            }
        }
      });

});

router.get('/vendor', function(req, res) {
    User.find({role: 'vendor'}).then(vendor => {
        if (vendor.length > 0) {
            return res.json(vendor);
        } else {
            return res.json('vendor not found');
        }
    });
});

module.exports = router;