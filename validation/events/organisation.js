const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateorganisationInput(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
  data.event_id = !isEmpty(data.event_id) ? data.event_id : "";
  data.name = !isEmpty(data.name) ? data.name : "";
  data.subdomain = !isEmpty(data.subdomain) ? data.subdomain : "";
  
    if (Validator.isEmpty(data.event_id)) {
        errors.event_id = "event_id is required";
    }
    if (Validator.isEmpty(data.name)) {
        errors.name = "name is required";
    }
    if (Validator.isEmpty(data.subdomain)) {
        errors.subdomain = "subdomain is required";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};