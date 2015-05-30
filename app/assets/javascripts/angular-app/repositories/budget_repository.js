budget.service('BudgetRepository', function($http) {
  return {
    create: function(data) {
      return $http.post('/api/budgets', data);
    }
  };
});
