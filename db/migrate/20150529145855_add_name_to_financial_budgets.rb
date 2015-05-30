class AddNameToFinancialBudgets < ActiveRecord::Migration
  def change
    add_column :financial_budgets, :name, :string
  end
end
