const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const matchSchema = new Schema({
    matchDate: {
        time: String,
        day: String,
        month: String,
        year: String
    },
    teams: [
        { type: Schema.Types.ObjectId, ref: "Team" },
        { type: Schema.Types.ObjectId, ref: "Team" }
    ]
});

module.exports = mongoose.model("Match", matchSchema);