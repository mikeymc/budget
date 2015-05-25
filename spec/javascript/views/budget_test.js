describe('the main page', function() {
  var view;
  beforeEach(function() {
    this.injectDependencies('renderTemplate', '$state');
    view = this.renderTemplate('budget.html', this.$scope);
  });

  it('shows a Create New Budget button', function() {
    expect(view.find('button')).toContainText('Create New Budget');
  });

  it('shows a monthly expenses section header', function() {
    expect(view).toContainText('Monthly Expenses');
  });

  describe('clicking the Create New Budget button', function() {
    it('takes the user to the income page', function() {
      view.find("button:contains('Create New Budget')").click();
      expect(this.$state.current.name).toBe('income');
    });
  });
});
