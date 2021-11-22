const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const NomineeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  event_id: {
    type: String,
    required: true
  },
  category_id: {
    type: String,
    required: true
  },
  date_of_birth: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});
module.exports = Event = mongoose.model("nominee", NomineeSchema);