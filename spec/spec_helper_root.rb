ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)

ActiveRecord::Migration.check_pending! if defined?(ActiveRecord::Migration)
ActiveRecord::Base.logger = nil unless ENV['LOG'] == true

RSpec.configure do |config|
  config.before(:each) do
    DatabaseCleaner.strategy = :truncation
  end
  config.after(:each) do
    DatabaseCleaner.clean
  end
end
