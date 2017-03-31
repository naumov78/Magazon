
unless cart.nil?
  json.products cart.each do |cart_product|
    product = Product.find(cart_product.product_id)
    json.product product
    json.quantity cart_product.quantity
    json.total_price (product.price * cart_product.quantity).to_f
  end
end
