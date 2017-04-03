json.extract! category, :id, :title, :description

json.products category.products do |product|
  json.extract! product, :id, :title, :category_id, :brief_description, :full_description, :price, :discount, :on_sale, :created_at

  json.product_pictures product.product_pictures do |picture|
    json.image_url asset_path(picture.image.url)
  end

end
