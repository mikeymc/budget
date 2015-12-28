require_relative 'helpers/spec_helper'
require_relative 'helpers/journey_steps'
require_relative 'helpers/expectations'

describe 'when a user makes a budget' do
  let (:now) {JourneySteps.new}
  let (:then_expect) {Expectations.new}

  it 'lets a user make budgets' do
    now.visit_app
    then_expect.to_be_able_to_create_a_budget
    now.start_a_budget
    then_expect.to_see_a_new_budget
    now.enter_income_and_savings_information
    then_expect.to_see_a_weekly_allowance_amount
    now.refresh_the_page
    then_expect.to_see_the_budget
    now.update_income_and_savings_information
    now.refresh_the_page
    then_expect.to_see_that_the_budget_has_been_updated
  end
end
