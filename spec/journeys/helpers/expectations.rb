require_relative 'spec_helper'

class Expectations
  include ::RSpec::Matchers
  include Capybara::DSL

  def to_see_a_budget
    puts 'Looking at the budget...'
    expect(page).to have_field('net_annual_salary', with: '115000.0')
    expect(page).to have_field('annual_savings_goal', with: '45000.0')
    expect(page.find('.weekly_allowance')).to have_content('$1,346.15')
  end

  def to_see_that_the_budget_has_been_updated
    puts 'Making sure changes have persisted...'
    expect(page).to have_field('net_annual_salary', with: '200000.0')
    expect(page).to have_field('annual_savings_goal', with: '10000.0')
    expect(page.find('.weekly_allowance')).to have_content('$3,653.85')
  end
end
