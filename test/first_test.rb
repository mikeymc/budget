require_relative 'spec_helper'

describe "using the budget app" do
  it "lets the user see his monthly expenses" do
    visit('/')
    expect(page).to have_content('how to get rolling')
  end
end
