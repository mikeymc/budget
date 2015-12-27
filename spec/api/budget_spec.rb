require_relative 'helpers/spec_helper'

describe 'budgets' do
  describe '#show' do
    it 'fetches a single budget' do
      FactoryGirl.create(:budget, id: 1, gross_annual_salary: 100000.00, annual_savings_goal: 12345.67)

      get '/api/budgets/1'

      expect(response.status).to be(200)
      budget = JSON.parse(response.body)['budget']
      expect(budget['id']).to eq 1
      expect(budget['gross_annual_salary']).to eq '100000.0'
      expect(budget['annual_savings_goal']).to eq '12345.67'
    end

    it 'returns a 404 and an empty object when no budget exists' do
      get '/api/budgets/1'

      expect(response.status).to be(404)
    end
  end

  describe '#update' do
    it 'saves a budget' do
      FactoryGirl.create(:budget, id: 1, gross_annual_salary: 100000.00, annual_savings_goal: 12345.67)

      get '/api/budgets/1'

      budget = JSON.parse(response.body)['budget']
      expect(budget['id']).to eq 1
      expect(budget['gross_annual_salary']).to eq '100000.0'
      expect(budget['annual_savings_goal']).to eq '12345.67'

      put '/api/budgets/1', {:gross_annual_salary => 666.99, :annual_savings_goal => '12345.67'}

      expect(response.status).to be(200)
      budget = JSON.parse(response.body)['budget']
      expect(budget['id']).to eq(1)
      expect(budget['gross_annual_salary']).to eq('666.99')
      expect(budget['annual_savings_goal']).to eq('12345.67')

      get '/api/budgets/1'

      budget = JSON.parse(response.body)['budget']
      expect(budget['id']).to eq 1
      expect(budget['gross_annual_salary']).to eq '666.99'
      expect(budget['annual_savings_goal']).to eq '12345.67'
    end
  end
end
