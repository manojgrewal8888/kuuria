const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const EventCategorySchema = new Schema({
  event_id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});
module.exports = EventCategory = mongoose.model("eventCategory", EventCategorySchema);