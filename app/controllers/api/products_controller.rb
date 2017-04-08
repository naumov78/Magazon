

class Api::ProductsController < ApplicationController

  def show
    @product = Product.find(params[:id].to_i)
    if current_user
    last_watched_product = current_user.watched_products.order(created_at: :desc).limit(1).first
      if last_watched_product
        unless last_watched_product.product_id == @product.id
          watched_product = current_user.watched_list.watched_products.new(product_id: @product.id)
          watched_product.save
        end
      else
        watched_product = current_user.watched_list.watched_products.new(product_id: @product.id)
        watched_product.save
      end
    end
  end


end
