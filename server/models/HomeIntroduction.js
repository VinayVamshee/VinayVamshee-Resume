const mongoose = require('mongoose');

const HomeIntroSchema = new mongoose.Schema({
    Intro: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('HomeIntro', HomeIntroSchema);