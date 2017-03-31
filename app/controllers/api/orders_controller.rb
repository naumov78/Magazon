class Api::OrdersController < ApplicationController


  def index
    @orders = current_user.orders.all.includes(:product)
    debugger
  end


  def show
    @order = Order.find(params[:id]).order_products
  end


  def update
    @order = Order.find(params[:id])
    @order.update_attribute("status_id", order_params[:status_id])
    render 'api/orders/show'
  end


  private

  def order_params
    params.require(:order).permit(:status_id)
  end





end
