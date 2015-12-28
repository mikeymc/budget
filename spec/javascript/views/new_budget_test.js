describe('The New Budget Page', function() {
  var view;

  beforeEach(function() {
    this.injectDependencies('$scope', 'renderTemplate', 'Form', 'BudgetRepository', 'Http', '$state', '$stateParams');
  });

  it('tells the user to create a new budget', function() {
    view = this.renderTemplate('new_budget.html', this.$scope);

    expect(view).toContainText('Start a new budget!');
    expect(view.find('input[value="Start"]')).toExist();
  });

  describe('clicking "Start"', function() {
    it('takes the user to the budget page with a fresh budget', function() {
      spyOn(this.BudgetRepository, 'create').and.returnValue(this.Http.succeedToMakeRequest({budget: {id: 123}}));
      view = this.renderTemplate('new_budget.html', this.$scope);

      this.Form.click(view, 'start_budget_button');

      expect(this.$state.current.name).toEqual('budget');
      expect(this.$stateParams.budgetId).toEqual('123');
    });
  });
});
