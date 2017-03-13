class Api::UsersController < ApplicationController

  def create
    @user = User.create(user_params)
    if @user.save
      puts @user
    else
      puts @user.errors.full_messages
    end
  end

  def update
    @user = current_user
    if (@user)
      if (@user.update(user_params))
      else
        puts @user.errors.full_messages
      end
    else
      puts @user.errors.full_messages
    end
  end

  def show
  end

  def destroy
  end

  private
    def user_params
      params.require(:user).permit(:first_name, :last_name, :email, :password)
    end

end
