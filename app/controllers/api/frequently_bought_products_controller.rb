
class Api::FrequentlyBoughtProductsController < ApplicationController

  def create
    cart = CartProduct.where(cart_id: current_user.cart_id).order(created_at: :desc)
    i = 0
    while i < cart.length - 1
      product1 = Product.find(cart[i].product_id)
      j = i + 1
      while j < cart.length
        unless already_exists?(product1, cart[j].product_id)
          product2 = Product.find(cart[j].product_id)
          create_pair(product1, product2)
          create_pair(product2, product1)
        end
      j += 1
      end
    i += 1
    end
  @product = product1
  render 'api/products/show'
  end


private

  def already_exists?(product1, product2_id)
    existing_product = FrequentlyBoughtProduct.where(frequently_bought_together_id: product1.frequently_bought_together_id)
    .where(product_id: product2_id).first
    return true if existing_product
    false
  end

  def create_pair(product1, product2)
    bought_together_product = FrequentlyBoughtProduct.new(
      frequently_bought_together_id: product1.frequently_bought_together_id,
      product_id: product2.id)
    if bought_together_product.save
    else
      render json: bought_together_product.errors.full_messages, status: 422
    end
  end

end
