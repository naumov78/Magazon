class ChangeWatchedProductsList < ActiveRecord::Migration
  def change

    drop_table(:watched_products_lists)

    create_table :watched_products_lists do |t|
      t.integer :watched_list_id, null: false
      t.integer :product_id, null: false

      t.timestamps null: false
    end
  end
end
