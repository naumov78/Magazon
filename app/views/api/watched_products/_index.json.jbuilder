

json.watched_products watched_products do |watched_product|
  json.extract! Product.find(watched_product.product_id), :id, :category_id, :title, :brief_description, :price, :discount, :on_sale
end
