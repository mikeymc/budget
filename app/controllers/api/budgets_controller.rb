class Api::BudgetsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @budgets = FinancialBudget.all
    render :json => @budgets, each_serializer: FinancialBudgetSerializer
  end

  def create
    render :json => FinancialBudget.create(:name => params['name'])
  end
end
