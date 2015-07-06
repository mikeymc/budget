class Api::IncomesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
  end

  def create
    begin
      @budget = FinancialBudget.find(params['budget_id'])
      @budget.income = Income.new(income_params)
      @budget.save!
      render :json => @budget.income
    rescue
      render :json => {}, :status => 404
    end
  end

  def income_params
    params.require(:income).permit(:gross_annual_salary)
  end
end
