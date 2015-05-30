budget.controller('BudgetsController', function($scope, $state, BudgetSummaryRepository) {
  $scope.goToBudget = function(id) {
    $state.go('budget', {id: id});
  };

  $scope.startNewBudget = function() {
    $state.go('new-budget');
  };

  BudgetSummaryRepository.all().success(function(data) {
    $scope.budgets = data.budgets;
  });
});
