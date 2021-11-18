const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateEditEventInput(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
  data.event_id = !isEmpty(data.event_id) ? data.event_id : "";
  data.eventname = !isEmpty(data.eventname) ? data.eventname : "";
  data.start_date = !isEmpty(data.start_date) ? data.start_date : "";
  data.end_date = !isEmpty(data.end_date) ? data.end_date : "";
  data.timezone = !isEmpty(data.timezone) ? data.timezone : "";
  
    if (Validator.isEmpty(data.event_id)) {
        errors.event_id = "Event ID is required";
    }
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
return {
    errors,
    isValid: isEmpty(errors)
  };
};