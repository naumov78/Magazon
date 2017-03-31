class AddChangeAmountToDecimalInOrders < ActiveRecord::Migration
  def change

    drop_table(:orders)

    create_table :orders do |t|

      t.integer :user_id, null: false
      t.integer :status_id, null: false
      t.decimal :total_amount, default: 0

      t.timestamps null: false
    end
  end
end
