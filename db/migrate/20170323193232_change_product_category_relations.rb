class ChangeProductCategoryRelations < ActiveRecord::Migration
  def change

    drop_table(:products)
    create_table :products do |t|
      t.string :title, null: false
      t.string :brief_description
      t.string :full_description
      t.integer :category_id, null: false
      t.integer :price, null: false
      t.integer :discount, default: 0
      t.boolean :on_sale, defaulf: false

      t.timestamps null: false
    end

    add_index :products, :title

  end
end
