class Api::BudgetsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def show
    begin
      @budget = Budget.find(params['id'])
      render json: @budget, serializer: BudgetSerializer
    rescue
      render json: {}, status: 404
    end
  end

  def update
    begin
      @budget = Budget.find(params['id'])
      @budget.annual_savings_goal = params['annual_savings_goal']
      @budget.net_annual_salary = params['net_annual_salary']
      @budget.save!
      render json: @budget, serializer: BudgetSerializer
    rescue
      render json: {}, status: 404
    end
  end
end
