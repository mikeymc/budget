require_relative 'helpers/spec_helper'

describe 'budgets' do
  describe '#index' do
    it 'succeeds' do
      get '/api/budgets'

      expect(response.status).to be(200)
    end

    it 'retrieves all of the budgets' do
      FactoryGirl.create(:financial_budget, id: 1, name: 'first-budget', annual_salary: 12345.67)
      FactoryGirl.create(:financial_budget, id: 2, name: 'second-budget', annual_salary: 24000)

      get '/api/budgets'

      budgets = JSON.parse(response.body)['budgets']
      expect(budgets.size).to be(2)
      expect(budgets[0]['annual_salary']).to eq('12345.67')
      expect(budgets[0]['name']).to eq('first-budget')
      expect(budgets[1]['annual_salary']).to eq('24000.00')
      expect(budgets[1]['name']).to eq('second-budget')
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
