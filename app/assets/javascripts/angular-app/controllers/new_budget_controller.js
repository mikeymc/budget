budget.controller('NewBudgetController', function($scope, BudgetRepository, $state) {

  $scope.create = function() {
    BudgetRepository.create().success(function(response) {
      $state.go('budget', {budgetId: response.budget.id});
    });
  };

});
