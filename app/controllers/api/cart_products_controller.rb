

class Api::CartProductsController < ApplicationController



def create
  cart_product = current_user.cart.cart_products.new(cart_products_params)
  if cart_product.save
    @user = current_user
    render 'api/users/show'
  else
    render cart_product.errors.full_messages, status: 422
  end
end


def destroy
  cart_product = CartProduct.where(cart_id: current_user.cart_id).where(product_id: cart_products_params).last
  if cart_product.delete
    @user = current_user
    render 'api/users/show'
  else
    render json: ['no such product in the cart'], status: 404
  end
end

private

def cart_products_params
  params.require(:cart_product).permit(:product_id)
end

end
