class CreateBudget < ActiveRecord::Migration
  def change
    create_table :budgets do |t|
      t.decimal :gross_annual_salary
      t.decimal :annual_savings_goal
    end
  end
end
