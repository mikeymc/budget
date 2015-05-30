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
    expect(page).not_to have_css('.open_budget_list_item')
  end

  def to_see_new_budget_page
    puts 'Looking at empty budget page...'
    expect(page).to have_content 'New Budget'
    expect(page).to have_content 'Choose a name for your new budget'
    expect(page).to have_button 'Create'
  end
end
