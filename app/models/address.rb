# == Schema Information
#
# Table name: addresses
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  street     :string           not null
#  street2    :string
#  city       :string           not null
#  state_id   :integer          not null
#  zip        :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Address < ActiveRecord::Base

  has_one :state
  belongs_to :user

end
