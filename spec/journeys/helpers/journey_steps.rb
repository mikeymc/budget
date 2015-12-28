require_relative 'spec_helper'

class JourneySteps
  include Capybara::DSL

  def visit_app
    puts 'Going to the app...'
    visit '/'
  end

  def refresh_the_page
    puts 'Refreshing...'
    visit '/#/budgets/1'
  end

  def start_a_budget
    puts 'Starting a budget...'
    click_on 'Start'
  end

  def enter_income_and_savings_information
    puts 'Entering income and savings information...'
    fill_in 'net_annual_salary', with: '115000.00'
    fill_in 'annual_savings_goal', with: '45000.00'
    click_on 'Save'
  end

  def update_income_and_savings_information
    puts 'Updating income and savings information...'
    fill_in 'net_annual_salary', with: '200000.00'
    fill_in 'annual_savings_goal', with: '10000.00'
    click_on 'Save'
  end
end
