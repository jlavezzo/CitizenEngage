const mongoose = require('mongoose');

// I checked that what was in here was functionally the same as what is in governmentInititativesController. It was so I deleted this.

const governmentInitiativeSchema = new mongoose.Schema({
  //Needs some content
});


// My preference would be to call this GovernmentInitiativeModel -Jeff
const GovernmentInitiative = mongoose.model('GovernmentInitiative', governmentInitiativeSchema);

module.exports = GovernmentInitiative;