describe('the income section', function() {
  var view, self;
  beforeEach(function() {
    this.injectDependencies('renderTemplate');
    view = this.renderTemplate('income.html', this.$scope);
    self = this;
  });

  it('has a text area for bi-weekly takehome', function() {
    expect(view).toContainText('Annual Salary');
    expect(view.find("form input[name='annual_salary']")).toExist();
  });

  it('has an input area for federal allowances', function() {
    expect(view.find("form input[name='federal_allowances']")).toExist();
  });

  it('has a button labeled "Save"', function() {
    expect(view.find('button:contains("Save")')).toExist();
  });
});
