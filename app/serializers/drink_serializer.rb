class DrinkSerializer < ActiveModel::Serializer
  attributes :id, :ingredients, :price
end
