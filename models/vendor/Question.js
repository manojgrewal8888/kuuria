const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const EventQuestionSchema = new Schema({
  user_id: {
    type: String,
    required: true
  },
  question: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 1
  }
});
module.exports = Event = mongoose.model("events_questions", EventQuestionSchema);