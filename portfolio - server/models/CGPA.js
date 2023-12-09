const mongoose = require('mongoose');

const CGPASchema = new mongoose.Schema({
    CGPA: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('CGPA', CGPASchema);