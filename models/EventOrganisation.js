const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const EventOrganisationSchema = new Schema({
  event_id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  subdomain: {
    type: String,
    required: true
  }
});
module.exports = Event = mongoose.model("events_organisation", EventOrganisationSchema);