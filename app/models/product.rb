# == Schema Information
#
# Table name: products
#
#  id                :integer          not null, primary key
#  title             :string           not null
#  category_id       :integer          not null
#  brief_description :text
#  full_description  :text
#  price             :decimal(, )      not null
#  discount          :decimal(, )      default("0")
#  on_sale           :boolean
#  storefront        :boolean          default("false")
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class Product < ActiveRecord::Base

  # has_many :product_categories,
  # class_name: "ProductCategory",
  # primary_key: :id,
  # foreign_key: :product_id

  belongs_to :category

  has_many :watched_products_lists,
  class_name: "WatchedProductsList",
  primary_key: :id,
  foreign_key: :product_id

  has_many :cart_products,
  class_name: "CartProduct",
  primary_key: :id,
  foreign_key: :product_id

  has_many :carts, through: :cart_products
  has_many :watched_lists, through: :watched_products_lists

  has_many :order_products,
  class_name: "OrderProduct",
  primary_key: :id,
  foreign_key: :product_id

  has_many :orders, through: :order_products

  has_many :product_pictures

  has_one :frequently_bought_together
  has_many :bought_together, through: :frequently_bought_together, source: :products

  has_many :bought_together_products,
  class_name: "FrequentlyBoughtProduct",
  primary_key: :id,
  foreign_key: :product_id

end
