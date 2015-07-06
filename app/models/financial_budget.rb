class FinancialBudget < ActiveRecord::Base
  has_one :income, dependent: :destroy
end
