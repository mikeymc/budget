budget.controller('BudgetsController', function($scope, $state, BudgetSummaryRepository) {
  $scope.goToBudget = function(budgetId) {
    $state.go('budget', {budgetId: budgetId});
  };

  $scope.startNewBudget = function() {
    $state.go('new-budget');
  };

  BudgetSummaryRepository.all().success(function(data) {
    $scope.budgets = data.budgets;
  });
});
