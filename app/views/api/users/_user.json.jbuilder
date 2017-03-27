json.extract! user, :id, :first_name, :last_name, :email, :admin, :cart_id, :address_id, :payment_id

json.cart Cart.find(user.cart_id).products do |product|
  json.extract! product, :id, :category_id, :title, :brief_description, :full_description, :price, :discount, :on_sale, :created_at
end

json.address Address.find(user.address_id), :street, :street2, :city, :zip
json.state State.find(Address.find(user.address_id).state_id), :id, :state

json.payment Payment.find(user.payment_id), :cardholder, :card_number, :expires
json.card_network Payment.find(user.payment_id).network, :id, :network
