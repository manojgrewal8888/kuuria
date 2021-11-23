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

module.exports = router;