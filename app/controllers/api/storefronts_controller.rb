class StorefrontsController < ApplicationController


  def show
    storefront = Product.where(storefront: true)
    @storefront = storefront.shuffle.take(5)
    
  end


end
