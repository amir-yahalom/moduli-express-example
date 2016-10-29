function UserService($User) {
    this.User = $User;
}

/**
 * Add the given user
 * @param data
 * @returns {Promise}
 */
UserService.prototype.addUser = function (data) {
    return new this.User(data).save();
};

/**
 * get a specific user by name
 * @param name
 * @returns {Promise}
 */
UserService.prototype.getUserByName = function (name) {
    return this.User.find({name: name})
        .then(function (results) {
            if (Array.isArray(results)) {
                return results[0];
            }
            return results;
        });
};

/**
 * returns users according to the given query
 * @param by
 * @returns {Promise}
 */
UserService.prototype.getUsers = function (by) {
    return this.User.find(by);
};

module.exports = UserService;