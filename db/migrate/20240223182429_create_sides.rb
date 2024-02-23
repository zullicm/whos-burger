class CreateSides < ActiveRecord::Migration[7.0]
  def change
    create_table :sides do |t|
      t.text :ingredients, array: true, default: []
      t.float :price

      t.timestamps
    end
  end
end
