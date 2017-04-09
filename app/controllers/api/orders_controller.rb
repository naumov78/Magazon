class Api::OrdersController < ApplicationController


  def index
    orders_to_update = current_user.orders.where.not(status_id: OrderStatus.where(status: "Delivered").first.id)
    orders_to_update.ids.each do |id|
      update_status(id)
    end
    @orders = current_user.orders.all.order(created_at: :desc)
  end


  def show
    update_status(params[:id])
    @order = Order.find(params[:id]) #.order_products
  end

  def create
    cart = CartProduct.where(cart_id: current_user.cart_id).order(created_at: :desc)
    received = OrderStatus.first.id
    order = current_user.orders.create!(status_id: received)
    cart.each do |product_in_cart|
      product = Product.find(product_in_cart.product_id)
      OrderProduct.create!(order_id: order.id,
      product_id: product.id,
      quantity: product_in_cart.quantity)
      order.total_amount += (product.price * product_in_cart.quantity)
    end
    order.save
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

  def update_status(id)
    order = Order.find(id)
    time_now = Time.now
    diff = time_now - order.created_at
    case diff
    when 0...3600 then
      return
    when 3600...86400 then
      status = get_correct_status("Pending")
      order.update_attribute("status_id", status) if order.status_id != status
    when 86400...259200 then
      status = get_correct_status("Unshipped")
      order.update_attribute("status_id", status) if order.status_id != status
    when 259200...864000 then
      status = get_correct_status("Shipped")
      order.update_attribute("status_id", status) if order.status_id != status
    else
      status = get_correct_status("Delivered")
      order.update_attribute("status_id", status) if order.status_id != status
    end
  end

  def get_correct_status(status)
    new_status = OrderStatus.where(status: status)
    new_status.first.id
  end


end
