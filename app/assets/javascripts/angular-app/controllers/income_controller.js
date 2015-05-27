budget.controller('IncomeController', function($scope, IncomeRepository) {
  $scope.save = function() {
    var values = {
      annual_salary: $scope.annual_salary,
      federal_allowances: $scope.federal_allowances
    };
    IncomeRepository.create(values);
  };
});
