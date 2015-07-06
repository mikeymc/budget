class CreateIncomes < ActiveRecord::Migration
  def change
    create_table :incomes do |t|
      t.decimal :gross_annual_salary
      t.references :financial_budget, index: true
    end
    add_foreign_key :incomes, :financial_budgets
  end
end
