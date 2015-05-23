require 'capybara'
require 'capybara/poltergeist'

Capybara.run_server = false
Capybara.default_driver = :poltergeist
Capybara.app_host = 'http://localhost:3000'
Capybara.default_wait_time = 10

RSpec.configure do |configuration|
  configuration.include Capybara::DSL
end
