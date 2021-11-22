const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateEventInput(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
  data.eventname = !isEmpty(data.eventname) ? data.eventname : "";
  data.start_date = !isEmpty(data.start_date) ? data.start_date : "";
  data.end_date = !isEmpty(data.end_date) ? data.end_date : "";
  data.timezone = !isEmpty(data.timezone) ? data.timezone : "";
  data.user_id = !isEmpty(data.user_id) ? data.user_id : "";
  
    if (Validator.isEmpty(data.eventname)) {
        errors.eventname = "Event Name is required";
    } 
    if (Validator.isEmpty(data.start_date)) {
        errors.start_date = "Start Date is required";
    }
    if (Validator.isEmpty(data.end_date)) {
        errors.end_date = "End Date is required";
    }
    if (Validator.isEmpty(data.timezone)) {
        errors.timezone = "Timezone  is required";
    }
    if (Validator.isEmpty(data.user_id)) {
      errors.user_id = "user `id  is required";
    }
return {
    errors,
    isValid: isEmpty(errors)
  };
};