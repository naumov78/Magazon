json.extract! user, :id, :first_name, :last_name, :email, :admin, :cart_id, :address_id, :payment_id


json.products cart.products do |product|
  json.extract! product
end
