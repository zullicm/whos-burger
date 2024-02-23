class BurgersController < ApplicationController
skip_before_action :authorized
  def index
    @burgers = Burger.all

    burgers_with_image = @burgers.map do |burger|
      if burger.image.attached?
        burger.as_json.merge(image_url: url_for(burger.image))
      else
        burger.as_json.merge(image_url: nil)
      end
    end
    render json: burgers_with_image
  end

  def show
    burger = find_burger
    if burger
      if burger.image.attached?
        render json: burger.as_json.merge(image_url: url_for(burger.image))
      else
        render json: burger.as_json.merge(image_url: nil)
      end
    else 
      render json: {error: "Burger not found"}, status: :not_found
    end
  end

  def create
    burger = Burger.create(burger_params)
    if burger.valid?
      render json: burger, status: :created
    else
      render json: {errors: burger.errors.full_messages}, status: :unprocessable_entity
    end
  end

  private

  def burger_params
    params.require(:burger).permit(:ingredients, :price, :image)
  end

  def find_burger
    Burger.find(params[:id])
  end

end
