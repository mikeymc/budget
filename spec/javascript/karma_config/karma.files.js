var KarmaFiles = function() {
  var dependencies = [
    'vendor/assets/bower_components/jquery/dist/jquery.js',
    'vendor/assets/bower_components/jasmine-jquery/lib/jasmine-jquery.js',
    'vendor/assets/bower_components/angular/angular.js',
    'vendor/assets/bower_components/angular-ui-router/release/angular-ui-router.js'
  ];

  var application_files = [
    'app/assets/javascripts/angular-app/templates/*',
    'app/assets/javascripts/angular-app/modules/*'
  ];

  var test_files = [
    'spec/javascript/views/*.js'
  ];

  this.files = dependencies.concat(application_files, test_files);
};

module.exports = new KarmaFiles();
