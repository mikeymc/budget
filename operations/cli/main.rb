require_relative 'js'

module CLI
  class Main < Thor
    desc 'js', 'Javascript subcommands'
    subcommand 'js', CLI::Js

    desc 'test', 'Run all tests'
    def test
      system 'budget js test'
      system 'rspec ./spec/api/*_spec.rb'
      system 'rspec ./spec/journeys/*_spec.rb'
    end
  end
end
