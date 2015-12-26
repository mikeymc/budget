require_relative 'js'
require_relative 'db'
require_relative 'api'
require_relative 'journeys'

module CLI
  class Main < Thor
    desc 'js', 'Javascript subcommands'
    subcommand 'js', CLI::Js

    desc 'api', 'Api subcommands'
    subcommand 'api', CLI::Api

    desc 'db', 'Database subcommands'
    subcommand 'db', CLI::Db

    desc 'journeys', 'Journey test subcommands'
    subcommand 'journeys', CLI::Journeys

    desc 'test', 'Run all tests'
    def test
      system 'budget js test'
      system 'budget api test'
      system 'budget journeys test'
    end
  
    desc 'install', 'Install dependencies'
    def install
      system 'bundle install'
      system 'npm install'
      system 'bower install'
    end
  end
end
