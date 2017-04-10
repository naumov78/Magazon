class Api::WatchedProductsController < ApplicationController

  def index
    if current_user
      @watched_products = current_user.watched_products.order(created_at: :desc).limit(10)
    end
  end

end
