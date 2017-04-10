json.storefront storefront do |product|
  json.extract! product, :id, :category_id, :title, :brief_description, :price, :discount, :on_sale

  json.product_pictures product.product_pictures do |picture|
    json.image_url asset_path(picture.image.url)
  end
end

json.small_banners small_banners do |banner|
  json.image_url banner.image.url
end

json.big_banners big_banners do |banner|
  json.image_url banner.image.url
end
