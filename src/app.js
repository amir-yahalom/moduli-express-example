module.exports = function ($expressApp, $config, $logger, $http, $q) {
    var server = $http.createServer($expressApp);
    return {
        start: function (port) {
            var deferred = $q.defer();
            port = port || $config.PORT;
            server.listen(port, function () {
                $logger.log("server is listening on port " + port);
                deferred.resolve(port);
            });
            return deferred.promise;
        },
        stop: function () {
            server && server.close();
        },
        getServer: function () {
            return server;
        }
    };
};