Rails.application.routes.draw do
  root "hello#index"
  get "up" => "rails/health#show"
end
