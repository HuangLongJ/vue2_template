const fs = require('fs');
module.exports = (app) => {
    const routeFiles = fs.readdirSync('./routes');
    for (fileName of routeFiles) {
        if (fileName === 'index.js') continue
        const router = require(`./${fileName}`)
        app.use(`/${fileName}`, router)
    }
}