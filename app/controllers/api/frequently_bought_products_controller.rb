


class Api::FrequentlyBoughtProductsController < ApplicationController


  def create
    cart = CartProduct.where(cart_id: current_user.cart_id).order(created_at: :desc)
    cart.each_with_index do |product1, idx1|
      product1 = Product.find(product1.product_id)
      @product = product1
      cart.each_with_index do |product2, idx2|
        unless idx1 == idx2
          product2 = Product.find(product2.product_id)
          existing_product = FrequentlyBoughtProduct.where(frequently_bought_together_id: product1.frequently_bought_together_id)
          .where(product_id: product2.id).first
          unless existing_product
            bought_together_product = FrequentlyBoughtProduct.new(
              frequently_bought_together_id: product1.frequently_bought_together_id,
              product_id: product2.id)
            if bought_together_product.save

            else
              render json: bought_together_product.errors.full_messages, status: 422
            end
          end
        end
      end
    end

    render 'api/products/show'
  end


end
