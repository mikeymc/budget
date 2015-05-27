budget.service('IncomeRepository', function($http) {
  return {
    create: function(body) {
      return $http.post('/income', body);
    }
  };
});
