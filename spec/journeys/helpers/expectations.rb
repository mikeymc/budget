require_relative 'spec_helper'

class Expectations
  include ::RSpec::Matchers
  include Capybara::DSL

  def to_see_a_budget
    puts 'Looking for an empty budget...'
    expect(page).to have_field('net_annual_salary', with: '115000.0')
    expect(page).to have_field('annual_savings_goal', with: '45000.0')
    expect(page.find('.weekly_allowance')).to have_content('$1,346.15')
  end
end
