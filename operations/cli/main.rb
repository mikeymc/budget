require_relative 'js'
require_relative 'api'
require_relative 'journeys'

module CLI
  class Main < Thor
    desc 'js', 'Javascript subcommands'
    subcommand 'js', CLI::Js

    desc 'api', 'Api subcommands'
    subcommand 'api', CLI::Api

    desc 'journeys', 'Journey test subcommands'
    subcommand 'journeys', CLI::Journeys

    desc 'test', 'Run all tests'
    def test
      system 'budget js test'
      system 'budget api test'
      system 'budget journeys test'
    end
  end
end
