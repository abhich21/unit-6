const mongoose = require('mongoose');

const floorSchema = new mongoose.Schema({
    floor_id: {type: Number, unique: true, required: true},
    floor: {type: Number,min: 0,max: 10,unique: true, required: true }
},
    {
    versionKey: false
});

module.exports = mongoose.model('floor', floorSchema);
