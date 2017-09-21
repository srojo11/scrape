// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var ArticleSchema = new Schema({
  // title is a required string
  headline: {
    type: String,
    required: true
  },
  // link is a required string
  url: {
    type: String,
    required: true
  }/*,
  summary: {
    type: String,
    required: true

  }*/

});

// Create the Article model with the ArticleSchema
var Article = mongoose.model("Article", ArticleSchema);

// Export the model
module.exports = Article;


  // This only saves one note's ObjectId, ref refers to the Note model
  /*note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }*/