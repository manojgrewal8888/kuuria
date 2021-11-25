const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const EventAppearanceSchema = new Schema({
  event_id: {
    type: String,
    required: true
  },
  logo: {
    type: String,
    required: true
  },
  banner: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  }
});
module.exports = Event = mongoose.model("events_Appearance", EventAppearanceSchema);