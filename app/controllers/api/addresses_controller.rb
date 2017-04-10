class Api::AddressesController < ApplicationController

  def create
    address = Address.new(user_id: current_user.id,
    street: address_params[:street],
    street2: address_params[:street2],
    city: address_params[:city],
    state_id: address_params[:state_id],
    zip: address_params[:zip]
    )
    if address.save
      @user = current_user
      @user.update_attribute("address_id", address.id)
      render "api/users/show"
    else
      render json: address.errors.full_messages, status: 422
    end
  end

  def update
    address = Address.find(current_user.address_id)
    if address.update_attributes(address_params)
      @user = current_user
      render "api/users/show"
    else
      render json: address.errors.full_messages, status: 422
    end
  end

  private

  def address_params
    params.require(:address).permit(:street, :street2, :city, :state_id, :zip)
  end

end
