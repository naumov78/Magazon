
unless cart.nil?
  json.products cart.each do |cart_product|
    product = Product.find(cart_product.product_id)
    json.product product, :id, :category_id, :title, :brief_description, :full_description, :price, :discount, :on_sale, :created_at
    json.quantity cart_product.quantity
    json.total_price (product.price * cart_product.quantity).to_f

    json.product_pictures product.product_pictures do |picture|
      json.image_url asset_path(picture.image.url)
    end

  end
end
