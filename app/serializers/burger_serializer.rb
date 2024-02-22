class BurgerSerializer < ActiveModel::Serializer
  attributes :id, :ingredients, :price
end
