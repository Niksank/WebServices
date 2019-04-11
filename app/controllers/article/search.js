// Core
const mock = require('../../models/get-user.js')
const validator = require('node-validator')

const check = validator.isObject()
  .withRequired('ids', validator.isArray())

module.exports = class Search {
  constructor (app) {
    this.app = app

    this.run()
  }

  /**
   * Middleware
   */
  middleware () {
 
    this.app.get('/article/search/', validator.express(this.check), (req, res) => {
      try {
        const result = {}
        articles.find(id, (err, data) => {
          console.log(">>>> " + data );
        });
  
    } catch (e) {
        console.error(`[ERROR] article/search -> ${e}`)
        res.status(400).json({
          'code': 400,
          'message': 'Bad request'
        })
      }
  } 
  }


  /**
   * Run
   */
  run () {
    this.middleware()
  }
}
