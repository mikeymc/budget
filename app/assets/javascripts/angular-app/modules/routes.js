budget.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('budgets');

  $stateProvider.state('budgets', {
    url: '/budgets',
    templateUrl: 'budgets.html'
  });

  $stateProvider.state('budget', {
    url: '/budgets/:id'
  });

  $stateProvider.state('new-budget', {
    url: '/create-new-budget',
    templateUrl: 'new_budget.html'
  });

  $stateProvider.state('income', {
    templateUrl: 'income.html'
  });
});
