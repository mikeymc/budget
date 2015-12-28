budget.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  
  $stateProvider.state('budget', {
    url: '/budgets/:budgetId',
    templateUrl: 'budget.html'
  });

  $stateProvider.state('/', {
    url: '/',
    templateUrl: 'new_budget.html'
  });
});
