require_relative 'helpers/spec_helper'
require_relative 'helpers/journey_steps'
require_relative 'helpers/expectations'

describe 'when a user makes a budget' do
  let (:now) {JourneySteps.new}
  let (:then_expect) {Expectations.new}

  before :each do
    FactoryGirl.create(:budget, id: 1, net_annual_salary: 115000.00, annual_savings_goal: 45000.00)
  end

  it 'lets a user make budgets' do
    now.visit_app
    then_expect.to_see_a_budget
    now.update_income_and_savings_information
    now.visit_app
    then_expect.to_see_that_the_budget_has_been_updated
  end
end
