json.products order do |order_product|
  json.order_id order_product.order_id
  product = Product.find(order_product.product_id)
  json.extract! product, :id, :category_id, :title, :brief_description, :full_description, :price, :discount, :on_sale, :created_at
  json.total_price (product.price * order_product.quantity).to_f
  json.quantity order_product.quantity
end
