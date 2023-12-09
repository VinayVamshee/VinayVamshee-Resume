const mongoose = require('mongoose');

const AboutIntroSchema = new mongoose.Schema({
    AboutIntro: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('AboutIntro', AboutIntroSchema);