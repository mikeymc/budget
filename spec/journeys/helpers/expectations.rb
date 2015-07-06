require_relative 'spec_helper'

class Expectations
  include ::RSpec::Matchers
  include Capybara::DSL

  def to_see_the_existing_budgets_page
    puts 'Looking at the list of existing budgets...'
    expect(page).to have_content 'Open Budgets'
  end

  def to_see_no_existing_budgets
    puts 'Seeing that no budgets are currently open...'
    expect(page).not_to have_css('.budget')
  end

  def to_see_new_budget_page
    puts 'Looking at empty budget page...'
    expect(page).to have_content 'New Budget'
    expect(page).to have_content 'Choose a name for your new budget'
    expect(page).to have_button 'Create'
  end

  def to_see_the_new_budget
    puts 'Looking for the new budget on the budgets page...'
    expect(page).to have_content 'Test Budget'
  end

  def to_see_budget_overview_page
    puts 'Looking at the Test Budget overview page...'
    expect(page).to have_content 'Income'
    expect(page).to have_content 'Expenses'
  end

  def to_see_income_section
    puts 'Looking at income section...'
    expect(page.find_field('gross_annual_salary').value).to eq '100000'
  end
end
