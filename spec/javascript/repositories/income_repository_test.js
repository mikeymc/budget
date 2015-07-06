describe('Income Repository', function() {
  describe('create', function() {
    beforeEach(function() {
      this.injectDependencies('$httpBackend', 'IncomeRepository');
      this.$httpBackend.expectPOST('/api/budgets/some-budget-id/income', 'some-income-json').respond(200, 'success-json');
    });

    it('makes an http post request to the income endpoint for a given budget', function() {
      this.IncomeRepository.save('some-budget-id', 'some-income-json');
      this.$httpBackend.flush();
    });

    it('returns the http response body', function() {
      var retrievedData = null;
      this.IncomeRepository.save('some-budget-id', 'some-income-json').success(function(data) {
        retrievedData = data;
      });
      this.$httpBackend.flush();
      expect(retrievedData).toEqual('success-json');
    });
  });
});
