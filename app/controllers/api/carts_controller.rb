
class Api::CartsController < ApplicationController

  def show
    @cart = Cart.find(current_user.cart_id)
    reversed = @cart.products.reverse
    @product_quantaty = reversed.each_with_object(Hash.new(0)) {|el, h| h[el] += 1 }
    # debugger
  end

  def quantaty_changed
    debugger
    last = @cart.products.pop
    i = @cart.products.length - 1
    while i >= 0
      idx = i if @cart.products[i].id == last.id
      i -= 1
    end
    j = @cart.products.length - 1
    until j >= idx
      @cart.products[j + 1] = @cart.products[j]
      j -= 1
      @cart.products[j + 1] = last if j == idx
    end
    @product_quantaty = @cart.products.each_with_object(Hash.new(0)) {|el, h| h[el] += 1 }
    render 'api/carts/show'
    # debugger
  end


end
