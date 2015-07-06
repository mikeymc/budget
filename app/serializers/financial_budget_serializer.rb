class FinancialBudgetSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_one :income
end
