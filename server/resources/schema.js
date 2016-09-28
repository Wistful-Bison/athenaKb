'use strict'
const mongoose = require('../config/middleware.js').mongoose;

module.exports = mongoose.model('Kb', new mongoose.Schema(
    {
      title: {
        type:String,
        unique: true
      },
      id: String,
      issuePreview: String,
      issue: String,
      solution: String,
      relatedTickets: [String],
      relatedProducts: Object, //keys are products, values are versions
      authorId: String,
      archived: Boolean,
      datesEdited: [[Date, String]], //dates edited, user Id
      dateSubmitted: Date,
      dateLastViewed: Date,
      viewCount: Number,
      checkedOut: Boolean
    },
    {  versionKey: false }
));
