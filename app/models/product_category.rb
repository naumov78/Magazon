# == Schema Information
#
# Table name: product_categories
#
#  id          :integer          not null, primary key
#  category_id :integer          not null
#  product_id  :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class ProductCategory < ActiveRecord::Base

  belongs_to :category
  belongs_to :product
  
end
