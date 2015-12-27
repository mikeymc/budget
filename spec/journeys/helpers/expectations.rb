require_relative 'spec_helper'

class Expectations
  include ::RSpec::Matchers
  include Capybara::DSL

  def to_see_an_empty_budget
    puts 'Looking for an empty budget...'
    expect(page).to have_field('net_annual_salary', with: '')
    expect(page).to have_field('annual_savings_goal', with: '')
    expect(page.find('.weekly_allowance')).to have_content(0)
  end
end
