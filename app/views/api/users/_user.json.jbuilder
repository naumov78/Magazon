json.extract! user, :id, :first_name, :last_name, :email, :admin, :cart_id, :address_id, :payment_id
json.orders user.orders

json.cart Cart.find(user.cart_id).products do |product|
  json.extract! product, :id, :category_id, :title, :brief_description, :full_description, :price, :discount, :on_sale, :created_at
end

unless user.address_id.nil?
  address = Address.find(user.address_id)
  state = State.find(address.state_id)
  json.address address, :street, :street2, :city, :zip
  json.state state, :id, :state
end

unless user.payment_id.nil?
  payment = Payment.find(user.payment_id)
  json.payment payment, :cardholder, :card_number, :expires
  json.card_network payment.network, :id, :network
end

json.states State.all do |state|
  json.extract! state, :id, :state
end

json.networks Network.all do |network|
  json.extract! network, :id, :network
end
