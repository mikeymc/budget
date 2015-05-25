budget.controller('BudgetController', function($scope, $state) {
  $scope.goToIncomeSection = function() {
    $state.go('income');
  };
});
