const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateEventFilterInput(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
  data.status = !isEmpty(data.status) ? data.status : "";
  
    if (Validator.isEmpty(data.status)) {
        errors.status = "Status is required";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};