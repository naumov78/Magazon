class Api::WatchedProductsController < ApplicationController


  def index
    @watched_products = current_user.watched_products.order(created_at: :desc).limit(30)
  end


end
