var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({

  Student_Id: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
Name: {
    type: String,
    required: true,
  },
  Parent: {
    type: String,
    required: true,
  },
  /*Mother: {
    type: String,
    required: true,
  },
  Guardian: {
    type: String,
    required: true,
  },*/
  Phone_Number: {
    type: Number,
    required: true,
  },
  Mailid: {
    type: String,
    unique: true,
    required: true,
    trim: true
  }
});

module.exports=mongoose.model('create-account',UserSchema);
