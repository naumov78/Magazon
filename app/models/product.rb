# == Schema Information
#
# Table name: products
#
#  id                :integer          not null, primary key
#  title             :string           not null
#  brief_description :string
#  full_description  :string
#  category_id       :integer          not null
#  price             :integer          not null
#  discount          :integer          default("0")
#  on_sale           :boolean
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class Product < ActiveRecord::Base

  # has_many :product_categories,
  # class_name: "ProductCategory",
  # primary_key: :id,
  # foreign_key: :product_id

  belongs_to :category

  has_many :cart_products,
  class_name: "CartProduct",
  primary_key: :id,
  foreign_key: :product_id

  # has_many :categories, through: :product_categories
  has_many :carts, through: :cart_products

end
