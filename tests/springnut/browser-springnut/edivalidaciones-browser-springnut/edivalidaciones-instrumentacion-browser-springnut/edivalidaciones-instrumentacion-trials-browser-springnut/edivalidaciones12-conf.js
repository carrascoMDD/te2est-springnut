// edivalidaciones12-conf.js
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['edivalidaciones12-spec.js'],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 180000
    }
};
