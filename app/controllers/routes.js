const Create = require('./user/create.js')
const Show = require('./user/show.js')
const Search = require('./user/search.js')
const Update = require('./user/update.js')
const Destroy = require('./user/destroy.js')

const CreateArticle = require('./article/create.js')
const ShowArticle = require('./article/show.js')
const SearchArticle = require('./article/search.js')
const UpdateArticle = require('./article/update.js')
const DestroyArticle = require('./article/destroy.js')

module.exports = {
  user: {
    Create,
    Show,
    Search,
    Update,
    Destroy
  },
 	article: {
    CreateArticle,
    ShowArticle,
    SearchArticle,
    UpdateArticle,
    DestroyArticle
  }
}
