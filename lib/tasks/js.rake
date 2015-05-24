desc 'run jasmine tests'
task :js do
  exec './node_modules/karma/bin/karma start ./spec/javascript/karma_config/karma.conf.js'
end
