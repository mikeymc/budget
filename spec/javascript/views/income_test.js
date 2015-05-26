describe('the income section', function() {
  var view, self;
  beforeEach(function() {
    this.injectDependencies('renderTemplate', 'IncomeRepository');
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

  describe('clicking "Save"', function() {
    it('calls the income repository', function() {
      spyOn(this.IncomeRepository, 'create');
      view.find('button:contains("Save")').click();
      this.$scope.$digest();
      expect(this.IncomeRepository.create).toHaveBeenCalled();
    });
  });
});
