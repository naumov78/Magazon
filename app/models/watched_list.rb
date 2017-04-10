# == Schema Information
#
# Table name: watched_lists
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class WatchedList < ActiveRecord::Base

  validates :user_id, presence: true

  belongs_to :user

  has_many :watched_products,
  class_name: "WatchedProductsList",
  primary_key: :id,
  foreign_key: :watched_list_id

  has_many :products, through: :watched_products

end
