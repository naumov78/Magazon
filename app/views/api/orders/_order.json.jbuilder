json.total_amount order.total_amount.to_f
json.status OrderStatus.find(order.status_id).status
json.posted order.created_at
json.updated order.updated_at
json.order_id order.id

json.products order.order_products do |order_product|
  json.order_id order_product.order_id
  product = Product.find(order_product.product_id)
  json.extract! product, :id, :category_id, :title, :brief_description, :full_description, :price, :discount, :on_sale, :created_at
  json.total_price (product.price * order_product.quantity).to_f
  json.quantity order_product.quantity

  json.product_pictures product.product_pictures do |picture|
    json.image_url asset_path(picture.image.url)
  end

end
