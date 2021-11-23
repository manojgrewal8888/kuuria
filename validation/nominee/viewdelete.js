const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateViewDeleteNomineeInput(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
  data.nominee_id = !isEmpty(data.nominee_id) ? data.nominee_id : "";
    if (Validator.isEmpty(data.nominee_id)) {
        errors.nominee_id = "nominee_id is required";
    }
return {
    errors,
    isValid: isEmpty(errors)
  };
};