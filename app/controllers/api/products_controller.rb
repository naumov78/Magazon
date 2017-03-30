

class Api::ProductsController < ApplicationController

  def show
    @product = Product.find(params[:id].to_i)
    watched_product = current_user.watched_list.watched_products.new(product_id: @product.id)
    watched_product.save
  end


end
