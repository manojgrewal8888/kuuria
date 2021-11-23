const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateNomineeInput(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
  data.nominee_id = !isEmpty(data.nominee_id) ? data.nominee_id : "";
  data.name = !isEmpty(data.name) ? data.name : "";
  data.event_id = !isEmpty(data.event_id) ? data.event_id : "";
  data.category_id = !isEmpty(data.category_id) ? data.category_id : "";
  data.date_of_birth = !isEmpty(data.date_of_birth) ? data.date_of_birth : "";
  
    if (Validator.isEmpty(data.nominee_id)) {
        errors.nominee_id = "nominee_id is required";
    } 
    if (Validator.isEmpty(data.name)) {
        errors.name = "Name is required";
    } 
    if (Validator.isEmpty(data.event_id)) {
        errors.event_id = "event_id is required";
    }
    if (Validator.isEmpty(data.category_id)) {
        errors.category_id = "category_id is required";
    }
    if (Validator.isEmpty(data.date_of_birth)) {
        errors.date_of_birth = "date_of_birth  is required";
    }
return {
    errors,
    isValid: isEmpty(errors)
  };
};