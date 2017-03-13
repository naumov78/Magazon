class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.boolean :admin, default: false
      t.integer :cart_id
      t.integer :payment_id
      t.integer :address_id
    end
      add_index "users", "session_token", unique: true
  end
end
