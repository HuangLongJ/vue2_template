const post = require('./post.js');
module.exports = (app) => {
    app.use('/post', post)
}