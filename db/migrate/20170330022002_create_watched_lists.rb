class CreateWatchedLists < ActiveRecord::Migration
  def change
    create_table :watched_lists do |t|
      t.integer :user_id, null: false
      t.timestamps null: false
    end
  end
end
