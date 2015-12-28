var KarmaFiles = function() {
  var dependencies = [
    'vendor/assets/bower_components/jquery/dist/jquery.js',
    'vendor/assets/bower_components/jasmine-jquery/lib/jasmine-jquery.js',
    'vendor/assets/bower_components/angular/angular.js',
    'vendor/assets/bower_components/angular-mocks/angular-mocks.js',
    'vendor/assets/bower_components/angular-ui-router/release/angular-ui-router.js',
    'vendor/assets/bower_components/underscore/underscore.js'
  ];

  var application_files = [
    'app/assets/javascripts/angular-app/templates/*.html',
    'app/assets/javascripts/angular-app/modules/module.js',
    'app/assets/javascripts/angular-app/modules/routes.js',
    'app/assets/javascripts/angular-app/repositories/*',
    'app/assets/javascripts/angular-app/controllers/*'
  ];

  var test_files = [
    'spec/javascript/helpers/inject_dependencies.js',
    'spec/javascript/helpers/*.js',
    'spec/javascript/repositories/*',
    'spec/javascript/modules/*',
    'spec/javascript/views/*'
  ];

  this.files = dependencies.concat(application_files, test_files);
};

module.exports = new KarmaFiles();
