describe('The Budget Page', function() {
  var view, budget;

  beforeEach(function() {
    this.injectDependencies('renderTemplate', 'Form', 'BudgetRepository', 'IncomeRepository', 'stub', 'Http', '$stateParams');
    var budget = {financial_budget: {id: 1, name: 'my-budget', income: {gross_annual_salary: '123456.78'}}};
    this.stub(this.BudgetRepository, 'get').withParam('budget-id').andReturn(this.Http.succeedToMakeRequest(budget));
    this.$stateParams.budgetId = 'budget-id';
  });

  xdescribe('setting up the view', function() {
    it('fetches the budget from the server', function() {
      view = this.renderTemplate('budget.html', this.$scope);

      console.log(view);
      expect(view).toContainText('123456.78');
    });
  });

  describe('the Income section', function() {
    it('has a header that says Income', function() {
      view = this.renderTemplate('budget.html', this.$scope);
      expect(view).toContainText('Income');
    });

    it('has an input field for gross annual salary', function() {
      expect(view.find('form')).toContainText('Gross Annual Salary');
    });
  });

  it('has an Expenses section', function() {
    expect(view).toContainText('Expenses');
  });

  describe('saving the information in the form', function() {
    it('saves the values the user entered', function() {
      spyOn(this.IncomeRepository, 'save');

      view = this.renderTemplate('budget.html', this.$scope);
      this.Form.fill(view, 'gross_annual_salary', '123456');
      this.Form.click(view, 'save_button');

      expect(this.IncomeRepository.save).toHaveBeenCalledWith(1, {gross_annual_salary: 123456});
    });
  });
});
