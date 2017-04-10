# == Schema Information
#
# Table name: payments
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  network_id  :integer          not null
#  cardholder  :string           not null
#  card_number :string           not null
#  expires     :date             not null
#  cvv         :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Payment < ActiveRecord::Base

  belongs_to :network
  belongs_to :user

end
