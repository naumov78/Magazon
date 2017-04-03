

json.watched_products watched_products do |watched_product|
  product = Product.find(watched_product.product_id)
  json.extract! product, :id, :category_id, :title, :brief_description, :price, :discount, :on_sale

  json.product_pictures product.product_pictures do |picture|
    json.image_url asset_path(picture.image.url)
  end
end
