var mongoose = require('mongoose');

var AssignmentSchema = new mongoose.Schema({
    name: String,
    completed: Boolean,
    note: String
});

module.exports = mongoose.model('assignment', AssignmentSchema);