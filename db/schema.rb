ActiveRecord::Schema.define(version: 20151226040312) do

  create_table "budgets", force: :cascade do |t|
    t.decimal "gross_annual_salary"
    t.decimal "annual_savings_goal"
  end

  create_table "pets", force: :cascade do |t|
    t.string "name"
  end

end
