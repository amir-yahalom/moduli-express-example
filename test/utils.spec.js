describe("utils unit tests", function () {
    var assert = require('assert'),
        sinon = require('sinon'),
        utils = require('../src/common/utils');

    describe("buildErrorResponse()", function () {
        it("should return expected error", function () {
            var res = utils.buildErrorResponse("e", 403);
            assert.equal(res.status, 403);
            assert.equal(res.message, "Error:[\"e\"]");
        });

        it("should return error with default status (500)", function () {
            var res = utils.buildErrorResponse("e");
            assert.equal(res.status, 500);
            assert.equal(res.message, "Error:[\"e\"]");
        });
    });
});