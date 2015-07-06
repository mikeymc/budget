class RemoveAnnualSalaryFromFinancialBudgets < ActiveRecord::Migration
  def change
    remove_column :financial_budgets, :annual_salary, :decimal
  end
end
