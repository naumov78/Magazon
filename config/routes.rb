Rails.application.routes.draw do

  root "static_pages#root"
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, except: [:new] do
      resources :addresses, only: [:create, :update]
      resources :payments, only: [:create, :update, :destroy]
    end

    # resources :order_products, only: [:create]
    resources :orders, except: [:new, :destroy]
    resources :cart_products, only: [:create, :update, :destroy]
    resources :carts, only: [:show]
    resources :storefronts, only: [:index]
    resources :watched_products, only: [:index]
    resources :frequently_bought_products, only: [:create]

    get "carts/:id/delete_all", to: "carts#delete_all"

    resources :categories, only: [:index, :show] do
      resources :products, only: [:show]
    end



  end
end
