const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateViewEventInput(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
  data.event_id = !isEmpty(data.event_id) ? data.event_id : "";
  
    if (Validator.isEmpty(data.event_id)) {
        errors.event_id = "Event ID is required";
    }
return {
    errors,
    isValid: isEmpty(errors)
  };
};