/**
 * Manage app routes. Bind each route to handler (& middleware)
 */
module.exports = function ($MainRoute, $UserRoute) {
    return {
        bind: function (app) {
            app.use("/", $MainRoute);
            app.use("/users", $UserRoute);
        }
    };
};