ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../../../config/environment', __FILE__)

require 'capybara/rails'
require 'capybara/poltergeist'
require 'rspec/rails'
require 'factory_girl'

ActiveRecord::Migration.check_pending! if defined?(ActiveRecord::Migration)
ActiveRecord::Base.logger = nil unless ENV['LOG'] == true

RSpec.configure do |config|
  config.include FactoryGirl::Syntax::Methods
  config.infer_spec_type_from_file_location!
  config.use_transactional_fixtures = false
  config.expect_with :rspec do |expectations|
    expectations.include_chain_clauses_in_custom_matcher_descriptions = true
  end
  config.mock_with :rspec do |mocks|
    mocks.verify_partial_doubles = true
  end
  config.before(:suite) do
    DatabaseCleaner.clean_with(:truncation)
  end
  config.before(:each) do
    DatabaseCleaner.strategy = :transaction
  end
  config.before(:each, :js => true) do
    DatabaseCleaner.strategy = :truncation
  end
  config.before(:each) do
    DatabaseCleaner.start
  end
  config.after(:each) do
    DatabaseCleaner.clean
  end
end
