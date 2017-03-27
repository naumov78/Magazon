class Api::PaymentsController < ApplicationController


  def create
    @payment = current_user.payment.new(payment_params)
    if @payment.save
      @user = current_user
      render 'api/users/show'
    else
      render json: @payment.errors.full_messages, status: 422
    end
  end


  def update
    @payment = Payment.find(current_user.payment_id)
    if @payment.update_attributes(payment_params)
      @user = current_user
      render 'api/users/show'
    else
      render json: @payment.errors.full_messages, status: 422
    end
  end


  def destroy
    @payment = Payment.find(current_user.payment_id)
    if @payment.delete
      @user = current_user
      render 'api/users/show'
    else
      render json: ['no active payment method'], status: 404
    end
  end


  private

  def paymetn_params
    params.require(:payment).permit(:network_id, :cardholder, :card_number, :expires, :cvv)
  end

end
