const mg = require('mongoose');

const PostsSchema = mg.Schema({
    text: {
        type: String
    }
})

module.exports = mg.model('Posts', PostsSchema)