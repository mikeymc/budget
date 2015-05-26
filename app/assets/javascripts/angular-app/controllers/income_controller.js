budget.controller('IncomeController', function($scope, IncomeRepository) {
  $scope.save = function() {
    IncomeRepository.create();
  };
});
