budget.service('Form', function($rootScope){
  return {
    fill: function(view, name, value) {
      var element = Find.elementNamed(view, name);
      element.val(value);
      element.trigger('change');
      $rootScope.$digest();
    },

    click: function(view, name) {
      var element = Find.elementNamed(view, name);
      element.click();
      $rootScope.$digest();
    }
  };
});
