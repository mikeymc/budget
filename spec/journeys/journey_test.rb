require_relative 'helpers/spec_helper'
require_relative 'helpers/journey_steps'
require_relative 'helpers/expectations'

describe 'when a user makes a budget' do
  let (:now) {JourneySteps.new}
  let (:then_expect) {Expectations.new}
  it 'lets a user make budgets' do
    now.visit_app
    then_expect.to_see_the_existing_budgets_page
    then_expect.to_see_no_existing_budgets
    now.click_create_new_budget
    then_expect.to_see_new_budget_page
    now.create_a_new_budget
    then_expect.to_see_the_existing_budgets_page
    then_expect.to_see_the_new_budget
    now.go_to_budget
    then_expect.to_see_budget_overview_page
    now.add_income_information
    now.refresh
    now.go_to_budget
    then_expect.to_see_income_section
  end
end
