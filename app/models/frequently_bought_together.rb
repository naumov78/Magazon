# == Schema Information
#
# Table name: frequently_bought_togethers
#
#  id         :integer          not null, primary key
#  product_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class FrequentlyBoughtTogether < ActiveRecord::Base

  belongs_to :product

  has_many :bought_together_products,
  class_name: "FrequentlyBoughtProduct",
  primary_key: :id,
  foreign_key: :frequently_bought_together_id

  has_many :products, through: :bought_together_products

end
