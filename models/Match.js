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
        { 
            id: String,
            name: String,
            image: String, 
        },
        { 
            id: String,
            name: String,
            image: String, 
        }
    ]
});

module.exports = mongoose.model("Match", matchSchema);