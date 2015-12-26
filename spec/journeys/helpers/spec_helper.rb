require_relative '../../spec_helper_root'
require 'pry'
require 'capybara/rails'
require 'capybara/rspec'
require 'capybara/poltergeist'

Capybara.run_server = true
Capybara.server_port = 8888
Capybara.default_driver = :poltergeist
Capybara.app_host = 'http://localhost:8888'

RSpec.configure do |configuration|
  configuration.include Capybara::DSL
end
