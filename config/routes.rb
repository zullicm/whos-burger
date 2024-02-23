Rails.application.routes.draw do
  resources :drinks
  resources :shakes
  resources :sides
  resources :burgers
  resources :users
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/auth", to: "users#show"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
