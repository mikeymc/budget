module CLI
  class Api < Thor
    desc 'test', 'Run Jasmine tests'
    def test
      system 'rspec ./spec/api/*_spec.rb'
    end
  end
end
