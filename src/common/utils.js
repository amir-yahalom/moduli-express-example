var utils = {};

utils.buildErrorResponse = function (e, status) {
    var err = new Error('Error:' + JSON.stringify([e]));
    err.status = status || 500;
    return err;
};

module.exports = utils;