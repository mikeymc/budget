describe('the Budget Repository', function() {
  beforeEach(function() {
    this.injectDependencies('BudgetRepository', '$httpBackend');
  });

  describe('#update', function() {
    it('make an HTTP POST to /api/budgets with its given data', function() {
      this.$httpBackend.expectPUT('/api/budgets/1', {id: 1, other_stuff: 'other-stuff'}).respond(200);
      this.BudgetRepository.update({id: 1, other_stuff: 'other-stuff'});
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
