budget.service('Http', function($q, $rootScope) {
  return {
    succeedToMakeRequest: function(response) {
      var deferred = $q.defer();

      deferred.resolve(response);

      deferred.promise.success = function(successCallback) {
        deferred.promise.then(successCallback);
        if($rootScope.$$phase === null) {
          $rootScope.$apply();
        }
        return deferred.promise;
      };

      deferred.promise.error = function(errorCallback) {
        deferred.promise.then(null, errorCallback);
        if($rootScope.$$phase === null) {
          $rootScope.$apply();
        }
        return deferred.promise;
      };

      return deferred.promise;
    }
  };
});
