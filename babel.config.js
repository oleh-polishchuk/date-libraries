module.exports = api => {
    const isTest = api.env('test');
    // All this configuration is needed for Jest as it does not allow to mock ES6 imported modules in current version 27.4.5
    // https://github.com/facebook/jest/issues/10025

    return {
        plugins: isTest ? ["@babel/plugin-transform-modules-commonjs"] : [],
        presets: isTest ?  [['@babel/preset-env'], ['@babel/preset-typescript']] : []
    };
}