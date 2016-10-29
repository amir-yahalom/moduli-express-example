var currentLevel = process.env.LOG_LEVEL || "info";

var logger = function logger(level, args) {
    if (logger.LEVELS[level] >= logger.LEVELS[currentLevel]) {
        console[level].apply(console, args);
    }
};

logger.LEVELS = {
    "info": 0,
    "log": 1,
    "debug": 2,
    "warn": 3,
    "error": 4
};

logger.setLevel = function (level) {
    if (level in logger.LEVELS) {
        currentLevel = level;
    }
};

logger.getLevel = function () {
    return currentLevel;
};

for (var level in logger.LEVELS) {
    (function (l) {
        logger[l] = function () {
            logger.call(null, l, arguments);
        };
    })(level);
}

module.exports = logger;