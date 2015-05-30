describe('the income section', function() {
  var view, self;
  beforeEach(function() {
    this.injectDependencies('renderTemplate', 'IncomeRepository', 'Form');
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
      spyOn(self.IncomeRepository, 'create');
      view.find('button:contains("Save")').click();
      expect(this.IncomeRepository.create).toHaveBeenCalled();
    });

    it('sends the annual income to the create function', function() {
      spyOn(self.IncomeRepository, 'create');
      self.Form.fill(view, 'annual_salary', 'annual-salary');
      self.Form.fill(view, 'federal_allowances', 'federal-allowances');
      view.find('button:contains("Save")').click();
      var expectedInput = {
        annual_salary: 'annual-salary',
        federal_allowances: 'federal-allowances'
      };
      expect(this.IncomeRepository.create).toHaveBeenCalledWith(expectedInput);
    });
  });
});
