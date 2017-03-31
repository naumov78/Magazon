# == Schema Information
#
# Table name: orders
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  status_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Order < ActiveRecord::Base

  has_one :order_status
  belongs_to :user

  has_many :order_products,
  class_name: "OrderProduct",
  primary_key: :id,
  foreign_key: :order_id

  has_many :products, through: :order_products

end
