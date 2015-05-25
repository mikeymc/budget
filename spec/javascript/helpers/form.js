budget.service('Form', function($scope){
  return {
    fill: function(view, name, value) {
      var element = Find.elementNamed(view, name);
      element.val(value);
      element.trigger('change');
    },

    click: function(view, name) {
      var element = Find.elementNamed(view, name);
      element.click();
      $scope.$digest();
    }
  };
});
