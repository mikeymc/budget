describe('the Budget Repository', function() {
  beforeEach(function() {
    this.injectDependencies('BudgetRepository', '$httpBackend');
  });

  describe('#create', function() {
    it('make an HTTP POST to /api/budgets with its given data', function() {
      this.$httpBackend.expectPOST('/api/budgets', 'some-stuff').respond(200);
      this.BudgetRepository.create('some-stuff');
      this.$httpBackend.flush();
    });
  });

  describe('#get', function() {
    it('makes an HTTP GET to /api/budgets/budget-id', function() {
      this.$httpBackend.expectGET('/api/budgets/budget-id').respond(200);
      this.BudgetRepository.get('budget-id');
      this.$httpBackend.flush();
    });
  });
});
