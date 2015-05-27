describe('Income Repository', function() {
  var self;

  describe('create', function() {
    beforeEach(function() {
      this.injectDependencies('$httpBackend', 'IncomeRepository');
      this.$httpBackend.expectPOST('/income', 'some-income-json').respond(200, 'success-json');
      self = this;
    });

    it('makes an http post request to the income endpoint', function() {
      self.IncomeRepository.create('some-income-json');
      self.$httpBackend.flush();
    });

    it('returns the http response body', function() {
      var retrievedData = null;
      self.IncomeRepository.create('some-income-json').success(function(data) {
        retrievedData = data;
      });
      self.$httpBackend.flush();
      expect(retrievedData).toEqual('success-json');
    });
  });
});
