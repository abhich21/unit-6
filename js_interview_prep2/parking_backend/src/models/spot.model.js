const mongoose = require("mongoose");

const spotSchema = new mongoose.Schema({
    spot_id: { type: Number, unique: true, required: true },
    floor_id: { type: mongoose.Schema.Types.ObjectId,ref:"floor",required:true },
    spot:{type:String,unique:true,required:true }
},
    {
    versionKey:false
    })
module.exports = mongoose.model("spot", spotSchema);