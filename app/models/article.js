const Schema = require('mongoose').Schema;

module.exports = new Schema({
  'title': String,
  'description': String,
  'category': String,
  'comment': String,
  'date': { type: Date, default: Date.now },
}, {
  'collection': 'articles',
  'versionKey': false
});