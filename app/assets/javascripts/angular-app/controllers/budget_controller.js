budget.controller('BudgetController', function($scope, $stateParams, BudgetRepository, IncomeRepository) {

  $scope.save = function() {
    BudgetRepository.update($scope.budget).success(function(response) {
      $scope.budget = response.budget;
    });
  };


  $scope.$watch('budget', function() {
    var get_net_annual_salary = function() {
      if ($scope.budget && $scope.budget.net_annual_salary) {
        return $scope.budget.net_annual_salary;
      } else {
        return 0;
      }
    };

    var get_annual_savings_goal = function() {
      if ($scope.budget && $scope.budget.annual_savings_goal) {
        return $scope.budget.annual_savings_goal;
      } else {
        return 0;
      }
    };

    $scope.weekly_allowance = (get_net_annual_salary() - get_annual_savings_goal()) / 52;
  });

  BudgetRepository.get($stateParams.budgetId)
    .success(function(returnedBudget) {
      $scope.budget = returnedBudget.budget;
    });
});
