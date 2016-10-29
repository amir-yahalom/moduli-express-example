/**
 * Express configuration
 * @returns {object} instance of express app
 */
module.exports = function ($path, $express, morganLogger, bodyParser, cookieParser, favicon, $routesManager, $errorHandler) {
    var app = $express();

    // view engine setup
    app.set('views', $path.join(__dirname, '../views'));
    app.set('view engine', 'hbs');
    
    // uncomment after placing your favicon in /public
    // app.use(favicon($path.join(__dirname, '../public', 'favicon.ico')));
    app.use(morganLogger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    // configure your express plugins
    // ...
    
    // static resources
    app.use($express.static($path.join(__dirname, "../public")));

    // configure routing 
    $routesManager.bind(app);
    // 
    $errorHandler.registerHandlers(app);

    return app;
};

module.exports["@moduli"] = {
    injections: {
        "bodyParser": "body-parser",
        "cookieParser": "cookie-parser",
        "favicon": "serve-favicon",
        "morganLogger": "morgan"
    }
};

