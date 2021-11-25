const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateappearanceInput(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
  data.event_id = !isEmpty(data.event_id) ? data.event_id : "";
  data.logo = !isEmpty(data.logo) ? data.logo : "";
  data.banner = !isEmpty(data.banner) ? data.banner : "";
  data.color = !isEmpty(data.color) ? data.color : "";
  
    if (Validator.isEmpty(data.event_id)) {
        errors.event_id = "event_id is required";
    }
    if (Validator.isEmpty(data.color)) {
        errors.color = "color is required";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};