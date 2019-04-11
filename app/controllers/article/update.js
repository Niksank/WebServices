 // Dependencies
const Schema = require('../../models/article.js')
const validator = require('node-validator')

module.exports = class UpdateArticle {
  constructor (app, config, connect) {
    this.app = app
    this.config = config
    this.ArticleModel = connect.model('Article', Schema)

    this.run()
  }
  /**
   * Middleware
   */
  middleware () {
    this.app.put('/article/update/:id',(req, res) => {
      try {
        const articleModel = new this.ArticleModel(req.body)

        this.ArticleModel.findOneAndUpdate({
          title: req.body.title
        }).then(article => {
            res.status(200).json(article || {})
            
          }).catch(() => {
            res.status(200).json({})
          })
      } catch (e) {
        console.error(`[ERROR] article/update/:id -> ${e}`)
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
