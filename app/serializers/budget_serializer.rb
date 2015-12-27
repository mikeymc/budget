class BudgetSerializer < ActiveModel::Serializer
  attributes :id, :gross_annual_salary, :annual_savings_goal
end
