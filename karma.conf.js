// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage-istanbul-reporter'),
            require('karma-spec-reporter'),
            require('karma-htmlfile-reporter'),
            require('@angular-devkit/build-angular/plugins/karma')
        ],
        client: {
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        coverageIstanbulReporter: {
            dir: require('path').join(__dirname, './coverage/angular-resume'),
            reports: ['html', 'lcovonly', 'text-summary'],
            fixWebpackSourcePaths: true
        },
        htmlReporter: {
            outputFile: 'tmp/results/index.html',
            pageTitle: 'Unit Test Results',
            subPageTitle: 'angular-resume',
            groupSuites: true,
            useCompactStyle: true,
            useLegacyStyle: false,
            showOnlyFailed: false
        },
        reporters: ['progress', 'kjhtml', 'spec', 'html'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['ChromeHeadless'],
        singleRun: false,
        restartOnFileChange: true
    });
};
