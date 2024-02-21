class SessionsController < ApplicationController
  skip_before_action :authorized, only: :create
  def create
    user = User.find_by(email: params[:email])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      if user.image.attached?
        render json: user.as_json.merge(image_url: url_for(user.image))
      else
        render json: user.as_json.merge(image_url: nil)
      end
    else
      render json: { error: "Invalid email or password" }, status: :unauthorized
    end
  end

  def destroy
    session.delete :user_id
    head :no_content
  end
end
