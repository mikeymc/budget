describe('The Budgets Page', function() {
  var view, self, budgetSummaryRepositorySpy;

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
        self.Form.click(view, 'new_budget_button');
        expect(self.$state.current.name).toEqual('new-budget');
      });
    });
  });

  it('contains a list entitled "Open Budgets"', function() {
    view = render(self.$scope);
    expect(view).toContainText('Open Budgets');
  });

  describe('the list of open budgets', function() {
    it('has zero items when this list is empty', function() {
      self.$scope.budgets = [];
      view = render(self.$scope);
      expect(view.find('.open_budget_list_item').length).toBe(0);
    });

    it('has three items when the list is size three', function() {
      var budgets = {budgets: ['one', 'two', 'three']};
      budgetSummaryRepositorySpy.and.returnValue(self.Http.succeedToMakeRequest(budgets));
      view = render(self.$scope);
      expect(view.find('.open_budget_list_item').length).toBe(3);
    });

    it('shows the name of each budget in each item', function() {
      var budgets = {budgets: [
        {id:'123', name:'budget-one'},
        {id:'456', name:'budget-two'}
      ]};
      budgetSummaryRepositorySpy.and.returnValue(self.Http.succeedToMakeRequest(budgets));
      view = render(self.$scope);
      expect(view.find('.open_budget_list_item')[0]).toContainText('budget-one');
      expect(view.find('.open_budget_list_item')[1]).toContainText('budget-two');
    });

    it('sets the name attribute to the id of the budget', function() {
       var budgets = {budgets: [
        {id:'123', name:'budget-one'},
        {id:'456', name:'budget-two'}
      ]};
      budgetSummaryRepositorySpy.and.returnValue(self.Http.succeedToMakeRequest(budgets));
      view = render(self.$scope);
      expect(view.find('.open_budget_list_item:nth(0)').attr('name')).toEqual('123');
      expect(view.find('.open_budget_list_item:nth(1)').attr('name')).toEqual('456');
    });
  });

  describe('how the list of budget summaries is populated', function() {
    it('gets them from the BudgetSummaryRepository', function() {
      var summaries = [];
      summaries.push({id:'first-id', name:'first-budget'});
      summaries.push({id:'second-id', name:'second-budget'});
      budgetSummaryRepositorySpy.and.returnValue(self.Http.succeedToMakeRequest({budgets: summaries}));
      view = render(self.$scope);
      expect(self.BudgetSummaryRepository.all).toHaveBeenCalled();
      expect(view).toContainText('first-budget');
      expect(view).toContainText('second-budget');
    });
  });

  describe('clicking one of the budgets in the list', function() {
    beforeEach(function() {
      var budgets = [{id: '123', name: 'my-test-budget'}];
      budgetSummaryRepositorySpy.and.returnValue(self.Http.succeedToMakeRequest({budgets: budgets}));
      view = render(this.$scope);
    });

    it('takes the user to budgets/{id-of-the-budget}', function() {
      self.Form.click(view, '123');
      self.$scope.$digest();
      expect(self.$location.url()).toEqual('/budgets/123');
    });
  });

  var render = function(scope) {
    return self.renderTemplate('budgets.html', scope);
  };
});
