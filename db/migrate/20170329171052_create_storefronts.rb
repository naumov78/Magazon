class CreateStorefronts < ActiveRecord::Migration
  def change
    create_table :storefronts do |t|

      t.timestamps null: false
    end
  end
end
