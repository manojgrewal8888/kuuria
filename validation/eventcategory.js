const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateEventInput(data) {
  let errors = {};
  data.user_id = !isEmpty(data.user_id) ? data.user_id : "";
  data.title = !isEmpty(data.title) ? data.title : "";
  data.description = !isEmpty(data.description) ? data.description : "";

  if (Validator.isEmpty(data.title)) {
    errors.title = "title field is required";
  }
  if (Validator.isEmpty(data.description)) {
    errors.description = "description field is required";
  }
  if (Validator.isEmpty(data.user_id)) {
    errors.user_id = "user_id field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};