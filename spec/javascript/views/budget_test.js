describe('the main page', function() {
  it('has a button that says Create New Budget', function() {
    this.injectDependencies('renderTemplate');
    view = this.renderTemplate('budget.html');
    expect(view).toContainText('Monthly Expenses');
  });
});
