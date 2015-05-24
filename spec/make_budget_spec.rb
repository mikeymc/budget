require_relative 'spec_helper'

describe "when a user makes a budget" do
  it "shows monthly expenses" do
    puts 'User is going to the app...'
    visit('/')
    expect(page).to have_content('Monthly Expenses')
  end
end
