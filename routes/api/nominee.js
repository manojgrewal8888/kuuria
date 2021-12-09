const express = require("express");
const router = express.Router();
const Nominee = require("../../models/Nominee");
const nomineeInputValidation = require("../../validation/nominee/addnominee");
const nomineeViewDeleteInputValidation = require("../../validation/nominee/viewdelete");
const nomineeUpdateInputValidation = require("../../validation/nominee/updatenominee");
const multer = require('multer');
const path = require('path');

const imageStorage = multer.diskStorage({
    // Destination to store image     
    destination: 'uploads/nominee', 
      filename: (req, file, cb) => {
          cb(null, file.fieldname + '_' + Date.now() 
             + path.extname(file.originalname))
            // file.fieldname is name of the field (image)
            // path.extname get the uploaded file extension
    }
});
const imageUpload = multer({
    storage: imageStorage,
    limits: {
      fileSize: 1000000 // 1000000 Bytes = 1 MB
    },
    fileFilter(req, file, cb) {
      if (!file.originalname.match(/\.(png|jpg)$/)) { 
         // upload only png and jpg format
         return cb(new Error('Please upload a Image'))
       }
     cb(undefined, true)
  }
})
router.post('/add_nominee', imageUpload.single('image'), function (req, res) {
    const { errors, isValid } = nomineeInputValidation(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    } 
   let nominee = new Nominee({
        name: req.body.name,
        event_id: req.body.event_id,
        category_id: req.body.category_id,
        date_of_birth: req.body.date_of_birth,
        image: req.file.path
    });
    nominee.save().then(nominee => res.json(nominee)).catch(err => console.log(err));
});
router.get('/delete', function (req, res) {
    const { errors, isValid } = nomineeViewDeleteInputValidation(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    Nominee.deleteOne({ _id: req.body.nominee_id }, function (err, results) {
        if (err) {
            console.log(err);
        } else {
            return res.status(200).json('nominee deleted successfully');
        }
    }); 
});
router.get('/view', function (req, res) {
    const { errors, isValid } = nomineeViewDeleteInputValidation(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    Nominee.find({_id: req.body.nominee_id}).then(nominee=>{
        if (nominee.length > 0) {
          return res.json(nominee);
        } else {
          return res.json('nominee not found');
        }
    });
});
router.post('/update_nominee', imageUpload.single('image'), function (req, res) {
    const { errors, isValid } = nomineeUpdateInputValidation(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    if (req.file) {
        var nominee = {
            name: req.body.name,
            event_id: req.body.event_id,
            category_id: req.body.category_id,
            date_of_birth: req.body.date_of_birth,
            image: req.file.path
       };
    } else {
        var nominee = {
            name: req.body.name,
            event_id: req.body.event_id,
            category_id: req.body.category_id,
            date_of_birth: req.body.date_of_birth
       };
    }
    Nominee.updateOne({_id: req.body.nominee_id}, {$set:nominee},{upsert: true }, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            return res.status(200).json('nominee updated successfully');
        }
    });
});
router.post('/event_nominee', function(req, res) {
    const err = {};
    if (!(req.body && req.body.event_id)) {
        err.event_id = 'event_id is required';
    }
    if (err.hasOwnProperty('event_id')) {
        return res.status(400).json(err);
    }
    Nominee.find({event_id: req.body.event_id}).then(nominee => {
        if (nominee.length > 0) {
            return res.status(200).json(nominee)
        } else {
            return res.status(404).json('nominees not found');
        }
    });
});
router.post('/approve', function(req, res) {
    const err = {};
    if (!(req.body && req.body.nominee_id)) {
        err.nominee_id = 'nominee_id is required';
    }
    if (!(req.body && req.body.is_approve)) {
        err.is_approve = 'is_approve is required';
    }
    if (err.hasOwnProperty('nominee_id') || err.hasOwnProperty('is_approve')) {
        return res.status(400).json(err);
    }
    if (req.body.is_approve == 2) {
        Nominee.updateOne({_id: req.body.nominee_id}, {$set:{is_approve: req.body.is_approve}},{upsert: true}, function(err, result) {
            if (err) {
                console.log(err);
            } else {
                return res.status(200).json('nominee approved successfully');
            }
        });
    } else {
        if (req.body.is_approve == 1) {
            Nominee.updateOne({_id: req.body.nominee_id}, {$set:{is_approve: req.body.is_approve}},{upsert: true}, function(err, result) {
                if (err) {
                    console.log(err);
                } else {
                    return res.status(200).json('nominee disapproved successfully');
                }
            });
        } else {
            return res.status(200).json('allowed value for is_approve is 1 or 2');
        }
    }

});

module.exports = router;