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
    this.app.get('/article/search', validator.express(this.check), (req, res) => {
      try {
        const articleModel = new this.ArticleModel(req.body)

        articleModel.findbyId().then(article => {
          res.status(200).json(article || {})
        }).catch(() => {
          res.status(200).json({})
        })
      } catch (e) {
        console.error(`[ERROR] article/create -> ${e}`)
        res.status(400).json({
          'code': 400,
          'message': 'Bad request'
        })
      }
    })
  }


  /**
   * Run
   */
  run () {
    this.middleware()
  }
}
