describe('The Budget Page', function() {
  var view;

  beforeEach(function() {
    this.injectDependencies('$scope', 'renderTemplate', 'Form', 'BudgetRepository', 'IncomeRepository', 'stub', 'Http', '$stateParams');
    this.$stateParams.budgetId = 'budget-id';
  });

  describe('when a budget is not found', function() {
    beforeEach(function() {
      spyOn(this.BudgetRepository, 'get').and.returnValue(this.Http.succeedToMakeRequest({}));
    });

    it('defaults to zeros for the salary and savings goal', function() {
      view = this.renderTemplate('budget.html', this.$scope);
      expect(view.find('#net_annual_salary').val()).toEqual('');
      expect(view.find('#annual_savings_goal').val()).toEqual('');
      expect(view.find('.weekly_allowance span').text().trim()).toEqual('$0.00');
    })
  });

  describe('when a budget exists', function() {
    beforeEach(function() {
      var budget = {net_annual_salary: 36000.00, annual_savings_goal: 24000.00};
      spyOn(this.BudgetRepository, 'get').and.returnValue(this.Http.succeedToMakeRequest({budget: budget}));
    });

    it('displays the salary, savings goal, and weekly allowance', function() {
      view = this.renderTemplate('budget.html', this.$scope);
      expect(view.find('#net_annual_salary').val()).toEqual('36000');
      expect(view.find('#annual_savings_goal').val()).toEqual('24000');
      expect(view.find('.weekly_allowance span').text().trim()).toEqual('$230.77');
    })
  });

  describe('updating the budget', function() {
    it('sends the updated data off to the backend', function() {
      spyOn(this.BudgetRepository, 'get').and.returnValue(this.Http.succeedToMakeRequest({}));
      spyOn(this.BudgetRepository, 'update').and.returnValue(this.Http.succeedToMakeRequest({budget: {
        id: 1,
        net_annual_salary: '987.65',
        annual_savings_goal: '123.45'
      }}));

      view = this.renderTemplate('budget.html', this.$scope);
      this.Form.fill(view, 'net_annual_salary', '53000.01');
      this.Form.fill(view, 'annual_savings_goal', '1000.01');
      this.Form.click(view, 'save_button');

      expect(this.BudgetRepository.update).toHaveBeenCalledWith({
        net_annual_salary: '53000.01',
        annual_savings_goal: '1000.01'
      });

      expect(view.find('#net_annual_salary').val()).toEqual('987.65');
      expect(view.find('#annual_savings_goal').val()).toEqual('123.45');
      expect(view.find('.weekly_allowance span').text().trim()).toEqual('$16.62');
    });
  });
});
