module.exports = function ($express, $logger, $utils, $UserService) {
    var router = $express.Router();

    router.get('/', function (req, res, next) {
        $UserService.getUsers({})
            .then(function (users) {
                res.json(users);
            }, function (e) {
                next($utils.buildErrorResponse(e, 500));
            });
    });

    router.get('/:name', function (req, res, next) {
        $UserService.getUserByName(req.params.name)
            .then(function (users) {
                res.json(users);
            }, function (e) {
                next($utils.buildErrorResponse(e, 500));
            });
    });

    router.post('/', function (req, res, next) {
        $UserService.addUser(req.body || {})
            .then(function (user) {
                res.json(user);
            }, function (e) {
                next($utils.buildErrorResponse(e, 500));
            });
    });

    return router;
};