const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateEventInput(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
  data.event_id = !isEmpty(data.event_id) ? data.event_id : "";
  data.category_id = !isEmpty(data.category_id) ? data.category_id : "";
  data.nominee_id = !isEmpty(data.nominee_id) ? data.nominee_id : "";
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.phone = !isEmpty(data.phone) ? data.phone : "";
  data.price = !isEmpty(data.price) ? data.price : "";
  data.vote = !isEmpty(data.vote) ? data.vote : "";

    if (Validator.isEmpty(data.event_id)) {
        errors.event_id = "event_id is required";
    } 
    if (Validator.isEmpty(data.category_id)) {
        errors.category_id = "category_id is required";
    }
    if (Validator.isEmpty(data.nominee_id)) {
        errors.nominee_id = "nominee_id is required";
    }
    if (Validator.isEmpty(data.name)) {
        errors.name = "name  is required";
    }
    if (Validator.isEmpty(data.email)) {
      errors.email = "email is required";
    }
    if (Validator.isEmpty(data.phone)) {
        errors.phone = "phone is required";
    }
    if (Validator.isEmpty(data.price)) {
    errors.price = "price is required";
    }
    if (Validator.isEmpty(data.vote)) {
    errors.vote = "vote is required";
    }
return {
    errors,
    isValid: isEmpty(errors)
  };
};