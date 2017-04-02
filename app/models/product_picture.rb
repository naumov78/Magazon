# == Schema Information
#
# Table name: product_pictures
#
#  id                 :integer          not null, primary key
#  product_id         :integer          not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class ProductPicture < ActiveRecord::Base

  belongs_to :product

  has_attached_file :image, styles: { large: "500x500>", medium: "250x250>", thumb: "75x75>" }, default_url: "no_image.gif"
  do_not_validate_attachment_file_type :image

end
