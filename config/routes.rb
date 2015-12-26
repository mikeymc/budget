Rails.application.routes.draw do
  root 'budget#index'

  namespace :api, :defaults => {:format => :json} do
    resources :budgets
  end
end
