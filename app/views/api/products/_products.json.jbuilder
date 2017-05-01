json.products products.each do |product|
  json.extract! product, :id, :category_id, :title, :brief_description, :full_description, :price, :discount, :on_sale, :created_at
  json.image_url asset_path(product.product_pictures.first.image.url)
end
