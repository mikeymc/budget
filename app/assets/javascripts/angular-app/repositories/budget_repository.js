budget.service('BudgetRepository', function($http) {
  return {
    create: function(data) {
      return $http.post('/api/budgets', data);
    },

    get: function(budgetId) {
      var url = "/api/budgets/" + budgetId;
      return $http.get(url);
    }
  };
});
