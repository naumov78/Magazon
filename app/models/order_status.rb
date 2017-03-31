# == Schema Information
#
# Table name: order_statuses
#
#  id         :integer          not null, primary key
#  status     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class OrderStatus < ActiveRecord::Base

  belongs_to :order

end
