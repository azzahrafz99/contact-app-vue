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
    return resource_saved(@user) if @user.save
    resource_not_valid(@user)
  end

  def edit; end

  def update
    @user = User.find(params[:id])
    return resource_saved(@user) if @user.update(user_params)
    resource_not_valid(@user)
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    return resource_saved(@user) if @user.destroyed?
    respond_to do |format|
      format.json do
        render json: { errors: ['Failed to destroy'] }, status: 400
      end
    end
  rescue ActiveRecord::RecordNotFound
    resource_not_found
  end

  private

  def user_params
    params.require(:user).permit(:name, :phone_number)
  end
end
