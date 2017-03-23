# == Schema Information
#
# Table name: carts
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Cart < ActiveRecord::Base
  validates :user_id, presence: true

  belongs_to :user

  has_many :cart_products,
  class_name: "CartProduct",
  primary_key: :id,
  foreign_key: :cart_id

  has_many :products, through: :cart_products


end
