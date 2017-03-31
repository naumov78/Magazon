class Api::OrdersController < ApplicationController


  def index
    @orders = current_user.orders.all.includes(:product)
    debugger
  end


  def show
    @order = Order.find(params[:id]).order_products
  end

  def create
    cart = CartProduct.where(cart_id: current_user.cart_id).order(created_at: :desc)
    received = OrderStatus.first.id
    order = current_user.orders.create!(status_id: received)
    cart.each do |product_in_cart|
      OrderProduct.create!(order_id: order.id,
      product_id: product_in_cart.product_id,
      quantity: product_in_cart.quantity)
    end
    cart.each do |cart_product|
      cart_product.delete
    end
    @order = order.order_products
    render 'api/orders/show'
  end


  def update
    order = Order.find(params[:id])
    order.update_attribute("status_id", order_params[:status_id])
    @order = order.order_products
    render 'api/orders/show'
  end


  private

  def order_params
    params.require(:order).permit(:status_id)
  end





end
