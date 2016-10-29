module.exports = function ($mongoose) {
    var schema = new $mongoose.Schema({
        name: String,
        email: String,
        img: String
    });

    return $mongoose.model('User', schema);
};