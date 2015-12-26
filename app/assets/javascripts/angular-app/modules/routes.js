budget.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('budgets/1');
  
  $stateProvider.state('budget', {
    url: '/budgets/:budgetId',
    templateUrl: 'budget.html'
  });
});
