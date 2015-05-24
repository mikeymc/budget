describe('the main page', function() {
  it('has a button that says Create New Budget', function() {
    this.injectDependencies('renderTemplate');
    view = this.renderTemplate('test.html');
    expect(view).toContainText('hi michael');
  });
});
