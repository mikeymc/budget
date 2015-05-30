describe('BudgetSummaryRepository', function() {
  var self;

  describe('all', function() {
    beforeEach(function() {
      this.injectDependencies('BudgetSummaryRepository', '$httpBackend');
      self = this;
    });

    it('makes an HTTP GET request to /budget-summaries', function() {
      self.$httpBackend.expectGET('/api/budgets').respond(200);
      self.BudgetSummaryRepository.all();
      self.$httpBackend.flush();
    });
  });
});
