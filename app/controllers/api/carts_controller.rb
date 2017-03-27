
class Api::CartsController < ApplicationController

  # def show
  #   # @cart = Cart.find(current_user.cart_id)
  #   # @product_quantity = @cart.products.reverse.each_with_object(Hash.new(0)) {|el, h| h[el] += 1 }
  #   @product_quantity = Hash.new(0)
  #   cart_products = CartProduct.all.where(cart_id: current_user.cart_id).order(created_at: :desc)
  #   # debugger
  #   cart_products.each do |pr|
  #     product = Product.find(pr.product_id)
  #     @product_quantity[product] += 1
  #   end
  # end


  def show
    @cart = CartProduct.all.where(cart_id: current_user.cart_id).order(created_at: :desc)
  end



  def create
    @cart = Cart.find(current_user.cart_id)
    @product_quantity = @cart.products.each_with_object(Hash.new(0)) {|el, h| h[el] += 1 }
    cart_product = current_user.cart.cart_products.new(cart_params)
    if cart_product.save
      product = Product.find(cart_params[:product_id])
      @product_quantity[product] += 1
    else
      render cart_product.errors.full_messages, status: 422
    end
    render '/api/carts/show'
  end


  def destroy
    @cart = Cart.find(current_user.cart_id)
    @product_quantity = @cart.products.each_with_object(Hash.new(0)) {|el, h| h[el] += 1 }
    cart_product = CartProduct.where(cart_id: current_user.cart_id).where(product_id: cart_params[:product_id]).last
    if cart_product.delete
      product = Product.find(cart_params[:product_id])
      @product_quantity[product] -= 1
    else
      render json: ['no such product in the cart'], status: 404
    end
    render '/api/carts/show'
  end

  def delete_all
    CartProduct.delete_all
    @product_quantity = Hash.new(0)
    render '/api/carts/show'
  end


  private

  def cart_params
    params.require(:cart).permit(:product_id)
  end


end
