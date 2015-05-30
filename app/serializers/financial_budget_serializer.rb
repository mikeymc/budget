class FinancialBudgetSerializer < ActiveModel::Serializer
  attributes :id, :annual_salary, :name

  def annual_salary
    if object.annual_salary.nil?
      ''
    else
      '%.2f' % object.annual_salary
    end
  end
end
