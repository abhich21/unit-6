const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    user_id : {type : Number, unique : true, required : true},
    name : {type : String, required : true},
    contact : {type : String, minlength : 10, maxlength : 10, required : true},
    role : {type : String, enum : ['admin', 'user', 'assistant']}    
},{
    versionKey : false
})

module.exports = mongoose.model('user', userSchema)