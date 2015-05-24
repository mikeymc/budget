require_relative 'spec_helper'

describe "when a user makes a budget" do
  it "shows monthly expenses" do
    puts 'User is going to the app...'
    visit('/')
    expect(page).to have_content('Monthly Expenses')
    find_button('Create New Budget').click
    expect(page).to have_content('Annual Salary')
  end
end
