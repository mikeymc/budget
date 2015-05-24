var karmaFiles = require('./karma.files.js');

var configureKarma = function (configuration) {
  configuration.set({
    basePath: '../../../',
    browsers: ['PhantomJS'],
    preprocessors: {
      'app/assets/javascripts/angular-app/templates/**/*.html': ['ng-html2js']
    },
    ngHtml2JsPreprocessor: {
      moduleName: 'templates',
      stripPrefix: 'app/assets/javascripts/angular-app/templates'
    },
    files: karmaFiles.files,
    exclude: [],
    autoWatch: false,
    frameworks: ['jasmine'],
    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-ng-html2js-preprocessor'
    ],
    singleRun: true
  });
};
module.exports = configureKarma;
