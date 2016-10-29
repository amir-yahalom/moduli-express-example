describe("UserService unit tests", function () {
    var assert = require('assert'),
        sinon = require('sinon'),
        Q = require('q'),
        UserService = require('../src/services/UserService'),
        UserMock = require('./utils/ModelMock'),
        userService = new UserService(UserMock);

    describe("getUserByName()", function () {
        var dummyUser = { name: 'dummy', email: "dummy@dummy.com", img: "dummy.jpg" };
        it("should call User.find() with expected argument", function (done) {
            sinon.stub(UserMock, "find", function (query) {
                assert.deepEqual(query, {name: "dummy"});
                return Q.resolve([dummyUser]);
            }); 
            userService.getUserByName("dummy")
                .then(function (result) {
                    assert.deepEqual(result, dummyUser);
                    UserMock.find.restore();
                    done();
                });
        });
        
        it("should return only one user", function (done) {
            sinon.stub(UserMock, "find").returns(Q.resolve([dummyUser, {name: "another result"}])); 
            userService.getUserByName("dummy")
                .then(function (result) {
                    assert.deepEqual(result, dummyUser);
                    UserMock.find.restore();
                    done();
                });
        });
    });

    describe("addUser()", function () {
        var dummyUser = { name: 'dummy', email: "dummy@dummy.com", img: "dummy.jpg" };
        it("should create instance of User and call User.save()", function (done) {
            assert.equal(UserMock.getItems().length, 0);
            userService.addUser(dummyUser)
                .then(function (result) {
                    assert.equal(result.name, "dummy");
                    assert.equal(UserMock.getItems().length, 1);
                    done();
                });
        });
    });


});