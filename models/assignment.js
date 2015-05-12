var mongoose = require('mongoose');

var AssignmentSchema = new mongoose.Schema({
    name: String,
    score: Number,
    completed: {type: Date, default: Date.now}
});

module.exports = mongoose.model('assignment', AssignmentSchema);