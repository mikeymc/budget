budget.service('renderTemplate', function($templateCache, $compile, $rootScope) {
  function isTemplateFile(template) {
    return _.last(template, 5).join('') === '.html';
  }

  function compileTemplate(template, $scope) {
    var linkedElement = $compile(template)($scope);
    var renderedElement = $('<div></div>').append(linkedElement);
    $scope.$apply();

    return renderedElement;
  }

  return function renderTemplate(template, $scope) {
    if ($scope === undefined) {
      $scope = $rootScope.$new();
    }
    var templateToCompile = isTemplateFile(template) ? $templateCache.get(template) : template;

    return compileTemplate(templateToCompile, $scope);
  };
});
