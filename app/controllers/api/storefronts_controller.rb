class Api::StorefrontsController < ApplicationController

  def index
    storefront = Product.where(storefront: true)
    @storefront = storefront.shuffle.take(10)
    @small_banners = SmallBanner.all
    @big_banners = BigBanner.all
  end

end
