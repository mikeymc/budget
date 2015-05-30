budget.service('BudgetSummaryRepository', function($http) {
  return {
    all: function() {
      return $http.get('/api/budgets');
    }
  };
});
