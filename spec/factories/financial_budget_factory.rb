FactoryGirl.define do
  factory :financial_budget do
    id 1
    name 'some-name'
    income { create(:income) }
  end

  factory :income do
    id 1
    gross_annual_salary 100000
  end
end
