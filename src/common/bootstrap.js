module.exports = function ($mongoose, $config, $logger) {
    $mongoose.connect($config.MONGO_URL);
    
    $logger.setLevel(process.env.LOG_LEVEL || "info");
    
    return true;
};

module.exports["@moduli"] = {
    type: "function"
};