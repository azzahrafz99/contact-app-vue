class ApplicationController < ActionController::Base
  protect_from_forgery

  protected

  def resource_saved(resource)
    respond_to do |format|
      format.json do
        render json: resource
      end
    end
  end

  def resource_not_valid(resource)
    respond_to do |format|
      format.json do
        render json: { errors: resource.errors.full_messages }, status: 400
      end
    end
  end

  def resource_not_found
    respond_to do |format|
      format.json do
        render json: { errors: ['Record cannot be found.'] }, status: 404
      end
    end
  end
end
