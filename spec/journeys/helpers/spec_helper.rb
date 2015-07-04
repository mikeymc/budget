ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../../../config/environment', __FILE__)

require 'pry'
require 'capybara/rails'
require 'capybara/rspec'
require 'selenium-webdriver'

Capybara.run_server = true
Capybara.server_port = 8888
Capybara.default_driver = :selenium #:poltergeist
Capybara.app_host = 'http://localhost:8888'

RSpec.configure do |configuration|
  configuration.include Capybara::DSL
end
