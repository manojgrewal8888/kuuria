const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateEventSearchInput(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
  data.event_name = !isEmpty(data.event_name) ? data.event_name : "";
  
    if (Validator.isEmpty(data.event_name)) {
        errors.event_name = "Event name is required";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};