budget.service('BudgetRepository', function($http) {
  return {
    update: function(data) {
      return $http.put('/api/budgets/' + data.id, data);
    },

    get: function(budgetId) {
      var url = "/api/budgets/" + budgetId;
      return $http.get(url);
    }
  };
});
