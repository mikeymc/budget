class RenameGrossAnnualSalaryToNetAnnualSalary < ActiveRecord::Migration
  def change
    change_table :budgets do |t|
      t.rename :gross_annual_salary, :net_annual_salary
    end
  end
end
