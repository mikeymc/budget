budget.service('IncomeRepository', function($http) {
  return {
    save: function(budgetId, data) {
      var url = '/api/budgets/' + budgetId + '/income';
      return $http.post(url, data);
    }
  };
});
