class BudgetSerializer < ActiveModel::Serializer
  attributes :id, :net_annual_salary, :annual_savings_goal
end
