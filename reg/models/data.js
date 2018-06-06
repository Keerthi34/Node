
var mongoose=require('mongoose');


var Schema = mongoose.Schema;

var schema = new Schema({
  "Student_Id" : {type:String},
  "Name" : {type:String},
  "type":{type:String},
  "P_Name":{type:String},
  "Phone_Number":{type:String},
  "Mailid":{type:String}


})

 /*function (Mailid,req, res) {


      var Mailid=User.findOne({}, { 'Mailid': req.body.Mailid })

      console.log(Mailid);
    }*/

module.exports=mongoose.model('account',schema);
