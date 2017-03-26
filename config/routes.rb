Rails.application.routes.draw do

  root "static_pages#root"
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, except: [:new] do
      resources :cart, only: [:index, :update, :destroy] do

      end
    end

    resources :cart_products, only: [:create, :destroy]
    resources :carts, only: [:show, :create, :destroy]

    get "carts/:id/delete_all", to: "carts#delete_all"

    resources :products, only: [:show]

    resources :categories, only: [:index, :show] do
      resources :products, only: [:show]
    end



  end
end

# get "carts/:id/unsorted", to: "carts#quantaty_changed"
