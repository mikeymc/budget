budget.controller('BudgetController', function($scope, $stateParams, BudgetRepository, IncomeRepository) {
  $scope.save = function() {
    IncomeRepository.save($scope.budget.id, $scope.budget.income);
  };

  BudgetRepository.get($stateParams.budgetId).success(function(returnedBudget) {
    $scope.budget = returnedBudget.financial_budget;
    if ($scope.budget.income != null) {
      $scope.budget.income.gross_annual_salary = parseFloat($scope.budget.income.gross_annual_salary);
    } else {
      $scope.budget.income = {};
    }
  });
});
