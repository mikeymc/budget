require_relative 'helpers/spec_helper'

describe 'the income controller' do
  describe '#create' do
    describe 'when a budget exists' do
      before :each do
        FactoryGirl.create(:financial_budget, id: 1, name: 'first-budget')
        post '/api/budgets/1/income', {income: {gross_annual_salary: '123456'}}
        expect(response.status).to be(200)
      end

      it 'saves the income section for the budget' do
        get '/api/budgets/1'
        expect(response.status).to be(200)
        budget_body = JSON.parse(response.body)['financial_budget']
        expect(budget_body['income']).not_to be_nil
      end

      it 'returns the posted income' do
        body = JSON.parse(response.body)
        expect(body['gross_annual_salary']).to eq '123456.0'
        expect(body['financial_budget_id']).to eq 1
      end
    end

    describe 'when a budget does not exist' do
      it 'returns a 404' do
        post '/api/budgets/1/income', {income: {gross_annual_salary: '123456'}}
        expect(response.status).to be(404)
      end
    end
  end
end
