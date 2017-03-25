
class Api::CartsController < ApplicationController

  def show
    @cart = Cart.find(current_user.cart_id)
  end

end
