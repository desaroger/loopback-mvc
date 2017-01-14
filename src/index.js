/**
 * Created by desaroger on 14/01/17.
 */

let expressController = require('express-controller');

function mvcPlugin(app, options = {}) {

    options = Object.assign({
        controllersFolder: 'mvc/controllers',
        viewFolder: 'mvc/views',
        views: true,
        viewsEngine: 'pug',
        middlewarePhase: 'routes:before'
    }, options);

    let router = app.loopback.Router();
    app.middleware(options.middlewarePhase, router);
    expressController
        .setDirectory(options.controllersFolder)
        .bind(app);

    if (options.views) {
        app.set('views', options.viewFolder);
        app.set('view engine', options.viewsEngine);
    }

    return {router, options};
}

module.exports = mvcPlugin;
