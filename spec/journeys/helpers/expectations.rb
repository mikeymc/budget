require_relative 'spec_helper'

class Expectations
  include ::RSpec::Matchers
  include Capybara::DSL

  def to_see_an_empty_budget
    puts 'Looking for an empty budget...'
    expect(page).to have_field('gross_annual_salary', with: 0)
    expect(page).to have_field('annual_savings_goal', with: 0)
  end
end
