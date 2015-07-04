module CLI
  class Js < Thor
    desc 'test', 'Run Jasmine tests'
    def test
      system './node_modules/karma/bin/karma start ./spec/javascript/karma_config/karma.conf.js'
    end
  end
end
