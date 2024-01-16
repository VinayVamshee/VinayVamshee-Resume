const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Description: {
        type: String,
    },
    Technology: {
        type: String,
    },
    GitHub: {
        type: String,
    },
    Link: {
        type: String,
    },
    Contributions: {
        type: String,
    },
    Links: {
        type: [String]
    }

});

module.exports = mongoose.model('Project', ProjectSchema);
