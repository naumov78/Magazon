class CreateProductCategories < ActiveRecord::Migration
  def change
    create_table :product_categories do |t|

      t.integer :category_id, null: false
      t.integer :product_id, null: false

      t.timestamps null: false
    end
  end
end
