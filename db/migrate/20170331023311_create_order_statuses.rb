class CreateOrderStatuses < ActiveRecord::Migration
  def change
    create_table :order_statuses do |t|

      t.string :status, null: false

      t.timestamps null: false
    end
  end
end
