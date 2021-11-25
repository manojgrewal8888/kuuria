const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateQuestionInput(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
data.user_id = !isEmpty(data.user_id) ? data.user_id : "";
data.question = !isEmpty(data.question) ? data.question : "";
  
    if (Validator.isEmpty(data.user_id)) {
        errors.user_id = "user_id is required";
    }
    if (Validator.isEmpty(data.question)) {
        errors.question = "question is required";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};