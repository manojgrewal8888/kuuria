const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateorganisationInput(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
  data.user_id = !isEmpty(data.user_id) ? data.user_id : "";
  data.name = !isEmpty(data.name) ? data.name : "";
  data.subdomain = !isEmpty(data.subdomain) ? data.subdomain : "";
  
    if (Validator.isEmpty(data.user_id)) {
        errors.user_id = "user_id is required";
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