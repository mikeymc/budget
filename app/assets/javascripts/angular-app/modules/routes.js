budget.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('/', {
    url: '/',
    templateUrl: 'budget.html'
  });

  $stateProvider.state('income', {
    templateUrl: 'income.html'
  });
});
