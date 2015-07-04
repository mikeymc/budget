describe('The Budgets Page', function() {
  var view, self, budgetSummaryRepositorySpy, budgets;

  beforeEach(function() {
    this.injectDependencies('renderTemplate', 'Form', '$location', 'Http', 'BudgetSummaryRepository', '$state');
    budgetSummaryRepositorySpy = spyOn(this.BudgetSummaryRepository, 'all');
    budgetSummaryRepositorySpy.and.returnValue(this.Http.succeedToMakeRequest([]));
    self = this;
  });

  describe('the "Create New Budget" button', function() {
    beforeEach(function() {
      view = render(self.$scope);
    });

    it('exists', function() {
      expect(view.find('button:contains("Create New Budget")')).toExist();
    });

    it('has the name "new_budget"', function() {
      expect(Find.elementNamed(view, 'new_budget_button')).toExist();
    });

    describe('clicking it', function() {
      it('sends the user to a New Budget page', function() {
        this.Form.click(view, 'new_budget_button');
        expect(this.$state.current.name).toEqual('new-budget');
      });
    });
  });

  it('contains a list entitled "Open Budgets"', function() {
    view = render(this.$scope);
    expect(view).toContainText('Open Budgets');
  });

  describe('the list of open budgets', function() {
    it('has zero items when this list is empty', function() {
      budgets = {budgets: []};
      budgetSummaryRepositorySpy.and.returnValue(this.Http.succeedToMakeRequest(budgets));

      view = render(this.$scope);

      expect(view.find('.budget').length).toBe(0);
    });

    it('has three items when the list is size three', function() {
      budgets = {budgets: [
        {id:'123', name:'budget-one'},
        {id:'456', name:'budget-two'},
        {id:'789', name:'budget-three'}
      ]};
      budgetSummaryRepositorySpy.and.returnValue(this.Http.succeedToMakeRequest(budgets));

      view = render(this.$scope);

      expect(view.find('.budget').length).toBe(3);
    });

    it('shows the name of each budget in each item', function() {
      budgets = {budgets: [
        {id:'123', name:'budget-one'},
        {id:'456', name:'budget-two'}
      ]};
      budgetSummaryRepositorySpy.and.returnValue(this.Http.succeedToMakeRequest(budgets));

      view = render(this.$scope);

      expect(view.find('.budget')[0]).toContainText('budget-one');
      expect(view.find('.budget')[1]).toContainText('budget-two');
    });

    it('sets the name attribute to the id of the budget', function() {
      budgets = {budgets: [
        {id:'123', name:'budget-one'},
        {id:'456', name:'budget-two'}
      ]};
      budgetSummaryRepositorySpy.and.returnValue(this.Http.succeedToMakeRequest(budgets));

      view = render(this.$scope);

      expect(view.find('.budget:nth(0)').attr('name')).toEqual('123');
      expect(view.find('.budget:nth(1)').attr('name')).toEqual('456');
    });
  });

  describe('how the list of budget summaries is populated', function() {
    it('gets them from the BudgetSummaryRepository', function() {
      budgets = [{id:'first-id', name:'first-budget'}, {id:'second-id', name:'second-budget'}];
      budgetSummaryRepositorySpy.and.returnValue(this.Http.succeedToMakeRequest({budgets: budgets}));

      view = render(this.$scope);

      expect(this.BudgetSummaryRepository.all).toHaveBeenCalled();
      expect(view).toContainText('first-budget');
      expect(view).toContainText('second-budget');
    });
  });

  describe('clicking one of the budgets in the list', function() {
    it('takes the user to budgets/{id-of-the-budget}', function() {
      budgets = [{id: '123', name: 'my-test-budget'}];
      budgetSummaryRepositorySpy.and.returnValue(this.Http.succeedToMakeRequest({budgets: budgets}));
      view = render(this.$scope);

      this.Form.click(view, '123');

      expect(this.$location.url()).toEqual('/budgets/123');
    });
  });

  var render = function(scope) {
    return self.renderTemplate('budgets.html', scope);
  };
});
