require_relative 'spec_helper'

class JourneySteps
  include Capybara::DSL

  def visit_app
    puts 'Going to the app...'
    visit '/'
  end

  def update_income_and_savings_information
    puts 'Updating income and savings information...'
    fill_in 'net_annual_salary', with: '200000.00'
    fill_in 'annual_savings_goal', with: '10000.00'
    click_on 'Save'
  end
end
