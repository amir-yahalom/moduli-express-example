var utils;
module.exports = function ($utils) {
    utils = $utils;
    return {
        registerHandlers: function (app) {
            catchNotFoundRequests(app);
            bindHandlers(app);
        }
    };
};

function catchNotFoundRequests(app) {
    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
        next(utils.buildErrorResponse('Not Found', 404));
    });
}

function bindHandlers(app) {
    // development error handler
    // will print stacktrace
    if (app.get('env') === 'development') {
        app.use(function(err, req, res, next) {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: err
            });
        });
    } else {
        // production error handler
        // no stacktraces leaked to user
        app.use(function(err, req, res, next) {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: {}
            });
        });
    }
}