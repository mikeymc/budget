class CreateFinancialBudget < ActiveRecord::Migration
  def change
    create_table :financial_budgets do |t|
      t.decimal :annual_salary
    end
  end
end
