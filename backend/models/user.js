const mongoose = require("mongoose");
const Users = mongoose.Schema({
  name: {
    type: String,
  },
  location: {
    type: String,
  },
  description: {
    type: String,
  },
  file_name: {
    type: String,
  },
  date: {
    type: String,
  },
});

module.exports = mongoose.model("Users", Users);