

class Api::ProductsController < ApplicationController

  def show
    @product = Product.find(params[:id].to_i)
  end


end
