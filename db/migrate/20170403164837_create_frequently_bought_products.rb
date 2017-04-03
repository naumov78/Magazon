class CreateFrequentlyBoughtProducts < ActiveRecord::Migration
  def change
    create_table :frequently_bought_products do |t|
      t.integer :frequently_bought_together_id, null: false
      t.integer :product_id, null: false
      
      t.timestamps null: false
    end
  end
end
