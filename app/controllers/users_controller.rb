class UsersController < ApplicationController
  respond_to :json, :html

  def index
    @users = User.all
    respond_to do |format|
      format.html
      format.json { render json: @users }
    end
  end

  def new; end

  def create
    @user = User.new(user_params)
    respond_to do |format|
      format.json do
        render json: @user if @user.save
      end
    end
  end

  def edit; end

  def update
    @user = User.find(params[:id])
    respond_to do |format|
      format.json do
        render json: @user if @user.update(user_params)
      end
    end
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    respond_to do |format|
      format.json { render json: @user }
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :phone_number)
  end
end
