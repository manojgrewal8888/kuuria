const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const VoterSchema = new Schema({
  category_id: {
    type: String,
    required: true
  },
  event_id: {
    type: String,
    default: 1
  },
  nominee_id: {
    type: String,
    default: 1
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  vote: {
    type: String,
    required: true
  }
});
module.exports = Voter = mongoose.model("voters", VoterSchema);