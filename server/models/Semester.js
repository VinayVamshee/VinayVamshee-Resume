const mongoose = require('mongoose');

const SemesterSchema = new mongoose.Schema({
    No: {
        type: Number,
        required: true,
    },
    GPA: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('Semester', SemesterSchema);