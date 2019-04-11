// Dependencies
const validator = require('node-validator');

// Schemas
module.exports = validator.isObject()
  .withRequired('title', validator.isString())
  .withRequired('category', validator.isString())
  .withRequired('description', validator.isString())
  .withRequired('comment', validator.isString())
  .withOptional('date', validator.isString())
