describe("app integration tests", function () {
    var assert = require('assert'),
        sinon = require('sinon'),
        Mongoose = require('mongoose').Mongoose,
        mongoose = new Mongoose(),
        mockgoose = require('mockgoose'),
        supertest = require('supertest'),
        moduli = require('moduli'),
        baseDir = __dirname,
        $app, agent;

    baseDir = baseDir.substring(0, baseDir.length - "/test".length);

    it("should initialize the app as expected", function (done) {
        moduli.initInjector(baseDir, "/modules.json")
            .then(function () {
                return mockgoose(mongoose);
            }).then(function () {
                moduli.set("mongoose", mongoose);
                moduli.init("bootstrap");
                $app = moduli.get("app");
                assert.ok($app);
                assert.ok($app.getServer());
                agent = supertest.agent($app.getServer());
                done();
            }).catch(done);
    });

    describe("users api", function () {
        var user = { name: 'dummy', email: "dummy@dummy.com", img: "dummy.jpg" };

        it("should add user", function (done) {
            agent.post('/users')
                .send(user)
                .end(function (err, res) {
                    if (err) return done(err);
                    assert.ok(res);
                    assert.equal(res.status, 200);
                    validateUser(res.body, user);
                    done();
                });
        });

        it("should get users", function (done) {
            agent.get('/users')
                .end(function (err, res) {
                    if (err) return done(err);
                    assert.ok(res);
                    assert.equal(res.status, 200);
                    assert.equal(res.body.length, 1);
                    validateUser(res.body[0], user);
                    done();
                });
        });

        it("should get user by name", function (done) {
            agent.get('/users/' + user.name)
                .end(function (err, res) {
                    if (err) return done(err);
                    assert.ok(res);
                    assert.equal(res.status, 200);
                    validateUser(res.body, user);
                    done();
                });
        });

        function validateUser(actual, expected) {
            assert.equal(actual.name, expected.name);
            assert.equal(actual.email, expected.email);
            assert.equal(actual.img, expected.img);
        }
    }); // end of: users api tests

});