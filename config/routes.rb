Rails.application.routes.draw do
  resources :cards
  resources :columns
  resources :boards
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
