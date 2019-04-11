// Dependencies
const Schema = require('../../models/article.js')

module.exports = class DestroyArticle {
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
    this.app.delete('/article/delete/:id',(req, res) => {
      try {
        this.ArticleModel.findOneAndDelete(req.params.id).then(article => {
            res.status(200).json(article || {})
            
          }).catch(() => {
            res.status(200).json({})
          })
      } catch (e) {
        console.error(`[ERROR] article/delete/:id -> ${e}`)
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
