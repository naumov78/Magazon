# == Schema Information
#
# Table name: frequently_bought_products
#
#  id                            :integer          not null, primary key
#  frequently_bought_together_id :integer          not null
#  product_id                    :integer          not null
#  created_at                    :datetime         not null
#  updated_at                    :datetime         not null
#

class FrequentlyBoughtProduct < ActiveRecord::Base

  belongs_to :frequently_bought_together
  belongs_to :product

end
