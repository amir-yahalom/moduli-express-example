var moduli = require('moduli');

moduli.initInjector(__dirname, process.env.MODULES_JSON || "/modules.json")
    .then(function () {
        // bootstrap
        moduli.init("bootstrap");
        moduli.get("logger").log("after bootstrap, starting app..");
        // start application
        moduli.get("app").start();
    });