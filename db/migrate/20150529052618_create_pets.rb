class CreatePets < ActiveRecord::Migration
  def change
    create_table :pets do |t|
      t.string :name
    end
  end
end
