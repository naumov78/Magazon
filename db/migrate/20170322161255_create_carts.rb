class CreateCarts < ActiveRecord::Migration
  def change
    create_table :carts do |t|

      t.integer :user_id, null: false

      t.timestamps null: false
    end
  end
end
