var mongoose=require('mongoose');
var Schema = mongoose.Schema;


var schema= new Schema({
    "New_Password" : {type:String},
    "Confirm_Password":{type:String}
    })






module.exports=mongoose.model('password',schema);
