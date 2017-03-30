class CreateWatchedProductsLists < ActiveRecord::Migration
  def change
    create_table :watched_products_lists do |t|
      t.integer :user_id, null: false
      t.integer :product_id, null: false

      t.timestamps null: false
    end
  end
end
