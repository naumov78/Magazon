json.extract! user, :id, :first_name, :last_name, :email, :admin, :cart_id, :address_id, :payment_id


json.cart_cart Cart.find(user.cart_id).products do |product|
  json.extract! product, :id, :category_id, :title, :brief_description, :full_description, :price, :discount, :on_sale, :created_at
end
