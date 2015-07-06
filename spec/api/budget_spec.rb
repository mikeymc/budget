require_relative 'helpers/spec_helper'

describe 'budgets' do
  describe '#index' do
    it 'retrieves all of the budgets' do
      FactoryGirl.create(:financial_budget, id: 1, name: 'first-budget', income: create(:income, id: 1))
      FactoryGirl.create(:financial_budget, id: 2, name: 'second-budget', income: create(:income, id: 2))

      get '/api/budgets'

      expect(response.status).to be(200)
      budgets = JSON.parse(response.body)['budgets']
      expect(budgets.size).to be(2)
      expect(budgets[0]['name']).to eq('first-budget')
      expect(budgets[1]['name']).to eq('second-budget')
    end
  end

  describe '#show' do
    it 'fetches a single budget' do
      FactoryGirl.create(:financial_budget, id: 1, name: 'first-budget', income: create(:income))

      get '/api/budgets/1'

      expect(response.status).to be(200)
      budget = JSON.parse(response.body)['financial_budget']
      expect(budget['id']).to eq 1
      expect(budget['name']).to eq 'first-budget'
      income = budget['income']
      expect(income['gross_annual_salary']).to eq '100000.0'
    end

    it '404s when no budget exists' do
      get '/api/budgets/1'

      expect(response.status).to be(404)
    end
  end

  describe '#create' do
    it 'saves a budget' do
      get '/api/budgets'

      body = JSON.parse(response.body)['budgets']
      expect(body.size).to be(0)

      post '/api/budgets', {:name => 'my-first-budget'}

      expect(response.status).to be(200)
      body = JSON.parse(response.body)['financial_budget']
      expect(body['id']).to eq(1)
      expect(body['name']).to eq('my-first-budget')

      get '/api/budgets'

      body = JSON.parse(response.body)['budgets']
      expect(body.size).to be(1)
      expect(body[0]['id']).to be(1)
      expect(body[0]['name']).to eq('my-first-budget')
    end
  end
end
