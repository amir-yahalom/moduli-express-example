/**
 * Configuration wrapper, loads the desired config json (according to current env)
 */
module.exports = function (localConfig, prodConfig) {
    if (process.env.APP_ENV === "prod") {
        return prodConfig;
    }
    return localConfig;
};

module.exports["@moduli"] = {
    type: "function",
    injections: {
        "localConfig": "local-config",
        "prodConfig": "prod-config"
    }
};