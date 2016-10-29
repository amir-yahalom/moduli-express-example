var crypto = require('crypto'),
    _ = require('underscore'),
    Q = require('q'),
    items = [];

function ModelMock(data) {
    var item = {
        _id: randomObjectId(),
        __v: 0
    };
    this.item = _.extend({}, data, item);
}

ModelMock.prototype.save = function () {
    items.push(this.item);
    return Q.resolve(this.item);
};

ModelMock.find = function (by) {
    // stub this function according to test
};

ModelMock.getItems = function () {
    return items;
};

module.exports = ModelMock;

function randomObjectId() {
    return crypto.createHash('md5').update(Math.random().toString()).digest('hex').substring(0, 24);
}