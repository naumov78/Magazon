
unless cart.nil?
  json.products cart.each do |cart_product|
    json.product Product.find(cart_product.product_id)
    json.quantity cart_product.quantity
    json.total_price (Product.find(cart_product.product_id).price * cart_product.quantity).to_f
  end
end




# json.products product_quantity.each do |product, quantity|
#   json.extract! product, :id, :category_id, :title, :brief_description, :full_description, :price, :discount, :on_sale, :created_at
#   json.quantity quantity
# end
