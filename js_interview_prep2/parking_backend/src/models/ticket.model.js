const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
    ticket_id: { type: Number, unique: true, required: true },
    spot_id: { type: mongoose.Schema.Types.ObjectId, ref: "spot", required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    amount: { type: Number, max: 100, min: 10, required: true },
}, {
    versionKey:false
})

module.exports = mongoose.Schema("ticket", ticketSchema);