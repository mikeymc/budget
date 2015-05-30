describe('New Budget Page', function() {
  var view, self;

  beforeEach(function() {
    this.injectDependencies('renderTemplate', 'Form', 'BudgetRepository', 'Http', '$state');
    view = this.renderTemplate('new_budget.html', this.$scope);
    self = this;
  });

  it('has a title', function() {
    expect(view).toContainText('New Budget');
  });

  it('has a text field for a name', function() {
    expect(view).toContainText('Choose a name for your new budget');
    expect(view.find('input').attr('name')).toEqual('budget_name');
  });

  it('has a "Create" button', function() {
    expect(view.find('button')).toContainText('Create');
    expect(view.find('button').attr('name')).toEqual('create_budget');
  });

  describe('clicking "Create"', function() {
    beforeEach(function() {
      var summary = {id:'123', name: 'some-name'};
      spyOn(this.BudgetRepository, 'create').and.returnValue(this.Http.succeedToMakeRequest(summary));
      self.Form.fill(view, 'budget_name', 'some-name');
      self.Form.click(view, 'create_budget');
    });

    it('creates a new Budget', function() {
      expect(self.BudgetRepository.create).toHaveBeenCalledWith({name: 'some-name'});
    });

    it('sends the user back to the budgets page on success', function() {
      expect(self.$state.current.name).toEqual('budgets');
    });
  });
});
