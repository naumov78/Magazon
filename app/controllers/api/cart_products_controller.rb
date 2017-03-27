

class Api::CartProductsController < ApplicationController

def create
  cart_product = current_user.cart.cart_products.where(product_id: cart_products_params[:product_id]).last
  if cart_product.nil?
    cart_product = current_user.cart.cart_products.new(cart_products_params)
      if cart_product.save
        @cart = CartProduct.all.where(cart_id: current_user.cart_id).order(created_at: :desc)
        # @user = current_user
        render 'api/carts/show'
      else
        render cart_product.errors.full_messages, status: 422
      end
  else
    cart_product.quantity += cart_products_params[:quantity].to_i
      if cart_product.save
        @cart = CartProduct.all.where(cart_id: current_user.cart_id).order(created_at: :desc)
        # @user = current_user
        render 'api/carts/show'
      else
        render cart_product.errors.full_messages, status: 422
      end
  end
end


def update
  cart_product = current_user.cart.cart_products.where(product_id: cart_products_params[:product_id]).last
  cart_product.quantity += cart_products_params[:quantity].to_i
  if cart_product.quantity < 1
    if cart_product.delete
      @cart = CartProduct.all.where(cart_id: current_user.cart_id).order(created_at: :desc)
      # @user = current_user
      render 'api/carts/show'
    else
      render json: ['no such product in the cart'], status: 404
    end
  else
    if cart_product.save
      @cart = CartProduct.all.where(cart_id: current_user.cart_id).order(created_at: :desc)
      # @user = current_user
      render 'api/carts/show'
    else
      render cart_product.errors.full_messages, status: 422
    end
  end
end


def destroy
  cart_product = CartProduct.where(cart_id: current_user.cart_id).where(product_id: cart_products_params[:product_id]).last
  if cart_product.delete
    @cart = CartProduct.all.where(cart_id: current_user.cart_id).order(created_at: :desc)
    # @user = current_user
    render 'api/carts/show'
  else
    render json: ['no such product in the cart'], status: 404
  end
end


private

def cart_products_params
  params.require(:cart_product).permit(:product_id, :quantity)
end

end
