const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true,
    },
    Description: {
        type: String,
    }
});

module.exports = mongoose.model('Skill', SkillSchema);