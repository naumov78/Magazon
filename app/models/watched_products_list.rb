# == Schema Information
#
# Table name: watched_products_lists
#
#  id              :integer          not null, primary key
#  watched_list_id :integer          not null
#  product_id      :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class WatchedProductsList < ActiveRecord::Base


  belongs_to :product,
  class_name: "Product",
  primary_key: :id,
  foreign_key: :product_id


  belongs_to :watched_list,
  class_name: "WatchedList",
  primary_key: :id,
  foreign_key: :watched_list_id


end
