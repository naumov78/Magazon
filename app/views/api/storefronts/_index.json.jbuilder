json.storefront storefront do |product|
  json.extract! product, :id, :category_id, :title, :brief_description, :price, :discount, :on_sale

  json.product_pictures product.product_pictures do |picture|
    json.image_url asset_path(picture.image.url)
  end
end
