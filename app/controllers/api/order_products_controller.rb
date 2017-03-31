class Api::OrderProductsController < ApplicationController

  def create
    order_product = OrderProduct.create!(
    order_id: order_product_params[:order_id],
    product_id: order_product_params[:product_id],
    quantity: order_product_params[:quantity])

    if order_product.save
      @order = Order.find(order_product_params[:order_id])
      render 'api/orders/show'
    else
      render order_product.errors.full_messages, status: 422
    end
  end


  private

  def order_product_params
    params.require(:order_product).permit(:order_id, :product_id, :quantity)
  end


end
