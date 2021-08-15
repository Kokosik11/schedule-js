const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const matchSchema = new Schema({
    matchDate: Date,
    teams: [
        { type: Schema.Types.ObjectId, ref: "Team" },
        { type: Schema.Types.ObjectId, ref: "Team" }
    ]
});

module.exports = mongoose.model("Match", matchSchema);