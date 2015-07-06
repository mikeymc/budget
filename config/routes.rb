Rails.application.routes.draw do
  root 'budgets#index'

  namespace :api, :defaults => {:format => :json} do
    resources :budgets do
      resource :income
    end
  end
end
