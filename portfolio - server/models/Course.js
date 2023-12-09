const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Description: {
        type: String,
    }

});

module.exports = mongoose.model('Course', CourseSchema);