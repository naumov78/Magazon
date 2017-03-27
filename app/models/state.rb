# == Schema Information
#
# Table name: states
#
#  id         :integer          not null, primary key
#  state      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class State < ActiveRecord::Base

  belongs_to :address

end
