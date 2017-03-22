# == Schema Information
#
# Table name: categories
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Category < ActiveRecord::Base

  has_many :category_products,
  class_name: "ProductCategory",
  primary_key: :id,
  foreign_key: :category_id

  has_many :products, through: :category_products

end
