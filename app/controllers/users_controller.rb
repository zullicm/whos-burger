class UsersController < ApplicationController

  def index
    @users = User.all

    users_with_image = @users.map do |user|
      if user.image.attached?
        user.as_json.merge(image_url: url_for(user.image))
      else
        user.as_json.merge(image_url: nil)
      end
    end
    render json: users_with_image
  end

  def show
    user = User.find_by(id: session[:user_id]) 
    if user
      if user.image.attached?
        render json: user.as_json.merge(image_url: url_for(usger.image))
      else
        render json: user.as_json.merge(image_url: nil)
      end
    else 
      render json: {error: "Not authorized"}, status: :unauthorized 
    end
  end

  def create
    user = User.create(user_params)
    if user.valid?
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end


  private

  def user_params
    params.permit(:email, :first_name, :last_name, :password, :password_confirmation, :image)
  end

end