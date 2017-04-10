class BigBanner < ActiveRecord::Base

  has_attached_file :image
  do_not_validate_attachment_file_type :image
  
end
