const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const TicketSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  price_votes: {
    type: String,
    required: true
  },
  venue: {
    type: String,
    required: true
  },
  number: {
    type: String,
    required: true
  }
});
module.exports = Ticket = mongoose.model("ticket", TicketSchema);