budget.controller('BudgetController', function($scope, $stateParams, BudgetRepository) {

  $scope.save = function() {
    BudgetRepository.update($scope.budget).success(function(response) {
      $scope.budget = response.budget;
    });
  };


  $scope.$watch('budget', function() {
    var calculate_weekly_allowance = function() {
      return ($scope.budget.net_annual_salary - $scope.budget.annual_savings_goal) / 52;
    };

    $scope.weekly_allowance = ($scope.budget) ? calculate_weekly_allowance() : '';
  });

  BudgetRepository.get($stateParams.budgetId)
    .success(function(returnedBudget) {
      $scope.budget = returnedBudget.budget;
    });
});
