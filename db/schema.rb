ActiveRecord::Schema.define(version: 20150705170446) do

  create_table "financial_budgets", force: :cascade do |t|
    t.string "name"
  end

  create_table "incomes", force: :cascade do |t|
    t.decimal "gross_annual_salary"
    t.integer "financial_budget_id"
  end

  add_index "incomes", ["financial_budget_id"], name: "index_incomes_on_financial_budget_id"

  create_table "pets", force: :cascade do |t|
    t.string "name"
  end

end
