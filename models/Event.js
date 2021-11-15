const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const EventSchema = new Schema({
  user_id: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'In-active'
  },
  eventname: {
    type: String,
    required: true
  },
  start_date: {
    type: String,
    required: true
  },
  end_date: {
    type: String,
    required: true
  },
  timezone: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Event = mongoose.model("events", EventSchema);