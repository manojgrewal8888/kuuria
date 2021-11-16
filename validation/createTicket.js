const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateTicketInput(data) {
  let errors = {};
  data.name = !isEmpty(data.name) ? data.name : "";
  data.date = !isEmpty(data.date) ? data.date : "";
  data.time = !isEmpty(data.time) ? data.time : "";
  data.price_votes = !isEmpty(data.price_votes) ? data.price_votes : "";
  data.venue = !isEmpty(data.venue) ? data.venue : "";
  data.number = !isEmpty(data.number) ? data.number : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = "name field is required";
  }
  if (Validator.isEmpty(data.date)) {
    errors.date = "date field is required";
  }
  if (Validator.isEmpty(data.time)) {
    errors.time = "time field is required";
  }
  if (Validator.isEmpty(data.price_votes)) {
    errors.price_votes = "price_votes field is required";
  }
  if (Validator.isEmpty(data.venue)) {
    errors.venue = "venue field is required";
  }
  if (Validator.isEmpty(data.number)) {
    errors.number = "number field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};