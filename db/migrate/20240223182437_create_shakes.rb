class CreateShakes < ActiveRecord::Migration[7.0]
  def change
    create_table :shakes do |t|
      t.text :ingredients, array: true, default: []
      t.float :price

      t.timestamps
    end
  end
end
