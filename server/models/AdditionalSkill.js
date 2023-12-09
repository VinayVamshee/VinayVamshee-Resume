const mongoose = require('mongoose');

const AdditionalSkillSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true,
    },
    Description: {
        type: String,
    }
});

module.exports = mongoose.model('AdditionalSkill', AdditionalSkillSchema);