
class Api::CartsController < ApplicationController

  def show
    # @cart = CartProduct.where(cart_id: current_user.cart_id).order(created_at: :desc)
    @cart = current_user.cart.order(created_at: :desc)
  end



  # def create
  #   @cart = Cart.find(current_user.cart_id)
  #   @product_quantity = @cart.products.each_with_object(Hash.new(0)) {|el, h| h[el] += 1 }
  #   cart_product = current_user.cart.cart_products.new(cart_params)
  #   if cart_product.save
  #     product = Product.find(cart_params[:product_id])
  #     @product_quantity[product] += 1
  #   else
  #     render cart_product.errors.full_messages, status: 422
  #   end
  #   render '/api/carts/show'
  # end
  #
  #
  # def destroy
  #   @cart = Cart.find(current_user.cart_id)
  #   @product_quantity = @cart.products.each_with_object(Hash.new(0)) {|el, h| h[el] += 1 }
  #   cart_product = CartProduct.where(cart_id: current_user.cart_id).where(product_id: cart_params[:product_id]).last
  #   if cart_product.delete
  #     product = Product.find(cart_params[:product_id])
  #     @product_quantity[product] -= 1
  #   else
  #     render json: ['no such product in the cart'], status: 404
  #   end
  #   render '/api/carts/show'
  # end

  def delete_all
    current_user.cart_products.delete_all
    @cart = current_user.cart
    render '/api/carts/show'
  end


  private

  def cart_params
    params.require(:cart).permit(:product_id)
  end


end
