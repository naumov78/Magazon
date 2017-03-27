class CreateCreditcards < ActiveRecord::Migration
  def change
    create_table :networks do |t|
      t.string :network, null: false

      t.timestamps null: false
    end
  end
end
