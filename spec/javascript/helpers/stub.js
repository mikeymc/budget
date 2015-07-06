budget.service('stub', function () {
  return function (testObject, testMethod) {
    var spy = spyOn(testObject, testMethod);
    var spyObject = {};

    spyObject.withParam = function (checkParam) {
      var spyParam = {};
      spyParam.andReturn = function (mockObject) {
        spy.and.callFake(function (inputParam) {
          if (_.isEqual(inputParam, checkParam)) {
            return mockObject;
          }
        });
      };

      return spyParam;
    };

    return spyObject;
  };
});
