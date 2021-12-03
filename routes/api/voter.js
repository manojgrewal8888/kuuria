const express = require("express");
const router = express.Router();
const Voter = require("../../models/Voter");
const validateVoter = require("../../validation/voter");

router.post('/vote', function(req, res) {
    const { errors, isValid } = validateVoter(req.body);
    // Check validation
    if (!isValid) {
    return res.status(400).json(errors);
    }

    const newVoter = new Voter({
        category_id: req.body.category_id,
        event_id: req.body.event_id,
        nominee_id: req.body.nominee_id,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        price: req.body.price,
        vote: req.body.vote
      });
    newVoter
    .save()
    .then(voter => res.json(voter))
    .catch(err => console.log(err));
});

router.get('/voter_list', function(req, res) {
    const err = {};
    if (!(req.body && req.body.event_id)) {
        err.event_id = 'event_id is required';
    }
    if (err.hasOwnProperty('event_id')) {
        return res.status(400).json(err);
    }

    Voter.find({event_id: req.body.event_id}).then(voter => {
        if (voter) {
            return res.status(200).json(voter);
          } else {
            return res.json('voters not found');
          }
    });
});
module.exports = router;