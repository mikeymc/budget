describe('The Budget Page', function() {
  var view, budget;

  beforeEach(function() {
    this.injectDependencies('$scope', 'renderTemplate', 'Form', 'BudgetRepository', 'IncomeRepository', 'stub', 'Http', '$stateParams');
    this.$stateParams.budgetId = 'budget-id';
    budget = {financial_budget: {id: 1, name: 'my-budget', income: {gross_annual_salary: '123456.78'}}};
  });

  describe('setting up the view', function() {
    it('fetches the budget from the server', function() {
      this.stub(this.BudgetRepository, 'get').withParam('budget-id').andReturn(this.Http.succeedToMakeRequest(budget));
      view = this.renderTemplate('budget.html', this.$scope);
      expect(view.find('input[name="gross_annual_salary"]').val()).toEqual('123456.78');
    });

    describe('when no income data yet exists', function() {
      it('sets the annual salary text field to empty', function() {
        budget = {financial_budget: {id: 1, name: 'my-budget', income: null}};
        this.stub(this.BudgetRepository, 'get').withParam('budget-id').andReturn(this.Http.succeedToMakeRequest(budget));
        view = this.renderTemplate('budget.html', this.$scope);

        expect(view.find('input[name="gross_annual_salary"]').val()).toEqual('');
      });
    });
  });

  describe('the Income section', function() {
    beforeEach(function() {
      this.stub(this.BudgetRepository, 'get').withParam('budget-id').andReturn(this.Http.succeedToMakeRequest(budget));
      view = this.renderTemplate('budget.html', this.$scope);
    });

    it('has a header that says Income', function() {
      expect(view).toContainText('Income');
    });

    it('has an input field for gross annual salary', function() {
      expect(view.find('form')).toContainText('Gross Annual Salary');
    });
  });

  it('has an Expenses section', function() {
    this.stub(this.BudgetRepository, 'get').withParam('budget-id').andReturn(this.Http.succeedToMakeRequest(budget));
    view = this.renderTemplate('budget.html', this.$scope);
    expect(view).toContainText('Expenses');
  });

  describe('saving the information in the form', function() {
    it('saves the values the user entered', function() {
      this.stub(this.BudgetRepository, 'get').withParam('budget-id').andReturn(this.Http.succeedToMakeRequest(budget));
      spyOn(this.IncomeRepository, 'save');

      view = this.renderTemplate('budget.html', this.$scope);
      this.Form.fill(view, 'gross_annual_salary', '123456');
      this.Form.click(view, 'save_button');

      expect(this.IncomeRepository.save).toHaveBeenCalledWith(1, {gross_annual_salary: 123456});
    });
  });
});
