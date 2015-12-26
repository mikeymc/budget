budget.controller('BudgetController', function($scope, $stateParams, BudgetRepository, IncomeRepository) {

  $scope.save = function() {
    IncomeRepository.save($scope.budget.id, $scope.budget.income);
  };

  BudgetRepository.get($stateParams.budgetId).success(function(returnedBudget) {
  });
});
