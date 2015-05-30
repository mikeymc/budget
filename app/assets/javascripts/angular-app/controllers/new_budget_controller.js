budget.controller('NewBudgetController', function($scope, BudgetRepository, $state) {
  $scope.create = function() {
    BudgetRepository.create({name: $scope.name}).success(function() {
      $state.go('budgets');
    });
  };
});
