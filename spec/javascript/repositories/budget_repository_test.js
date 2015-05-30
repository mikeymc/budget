describe('the Budget Repository', function() {
  var self;

  beforeEach(function() {
    this.injectDependencies('BudgetRepository', '$httpBackend');
    self = this;
  });

  it('make an HTTP POST to /budgets with its given data', function() {
    self.$httpBackend.expectPOST('/api/budgets', 'some-stuff').respond(200);
    self.BudgetRepository.create('some-stuff');
    self.$httpBackend.flush();
  });
});
