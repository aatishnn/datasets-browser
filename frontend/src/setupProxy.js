const proxy = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        '/api',
        proxy({
            target: 'https://datasets-bn.herokuapp.com/',
            changeOrigin: true,
        })
    );
};