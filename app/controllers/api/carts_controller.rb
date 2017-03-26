
class Api::CartsController < ApplicationController

  def show
    @cart = Cart.find(current_user.cart_id)
    @product_quantaty = @cart.products.each_with_object(Hash.new(0)) {|el, h| h[el] += 1 }
  end

end
