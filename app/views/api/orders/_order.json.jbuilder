json.products order do |product|
  json.extract! Product.find(product.product_id), :id, :category_id, :title, :brief_description, :full_description, :price, :discount, :on_sale, :created_at
  json.quantity product.quantity
end
