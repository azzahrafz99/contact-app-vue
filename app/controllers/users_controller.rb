class UsersController < ApplicationController
  def index
    @users = User.all
    respond_to do |format|
      format.html
      format.json { render :json => @users }
    end
  end

  def new
    @users = User.new
  end

  def create
    @user = User.new(user_params)
    respond_to do |format|
      format.json do
        if @user.save
          render :json => @user
        end
      end
    end
  end

  def edit

  end

  def update
    @user = User.find(params[:id])
    respond_to do |format|
      format.json do
        if @user.update
          render :json => @user
        end
      end
    end
  end

  def destroy
    User.find(params[:id]).destroy
    respond_to do |format|

    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :phone_number)
  end
end
