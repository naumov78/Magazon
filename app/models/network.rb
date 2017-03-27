# == Schema Information
#
# Table name: networks
#
#  id         :integer          not null, primary key
#  network    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Network < ActiveRecord::Base

  belongs_to :payment

end
