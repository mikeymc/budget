class CreateBudget < ActiveRecord::Migration
  def change
    create_table :budgets do |t|
      t.column :gross_annual_salary, :decimal, :precision => 11, :scale => 2
      t.column :annual_savings_goal, :decimal, :precision => 11,  :scale => 2
    end
  end
end
