class Api::PaymentsController < ApplicationController


  def create
    payment = Payment.new(user_id: current_user.id,
    network_id: payment_params[:network_id],
    cardholder: payment_params[:cardholder],
    card_number: payment_params[:card_number],
    expires: payment_params[:expires],
    cvv: payment_params[:cvv],
    )
    if payment.save
      @user = current_user
      @user.update_attribute("payment_id", payment.id)
      render 'api/users/show'
    else
      render json: payment.errors.full_messages, status: 422
    end
  end


  def update
    payment = Payment.find(current_user.payment_id)
    if payment.update_attributes(payment_params)
      @user = current_user
      render 'api/users/show'
    else
      render json: payment.errors.full_messages, status: 422
    end
  end


  def destroy
    payment = Payment.find(current_user.payment_id)
    if payment.delete
      @user = current_user
      render 'api/users/show'
    else
      render json: ['no active payment method'], status: 404
    end
  end


  private

  def payment_params
    params.require(:payment).permit(:network_id, :cardholder, :card_number, :expires, :cvv)
  end

end
