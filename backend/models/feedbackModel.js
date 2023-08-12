const mongoose = require('mongoose');

// I moved two functions from here into feedbackController and deleted everything from this file

const feedbackSchema = new mongoose.Schema({

   //needs some content

});

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;
