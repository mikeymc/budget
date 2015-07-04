require_relative 'js'
require_relative 'api'

module CLI
  class Main < Thor
    desc 'js', 'Javascript subcommands'
    subcommand 'js', CLI::Js

    desc 'api', 'Api subcommands'
    subcommand 'api', CLI::Api

    desc 'test', 'Run all tests'
    def test
      system 'budget js test'
      system 'budget api test'
      system 'rspec ./spec/journeys/*_spec.rb'
    end
  end
end
