MagicIsReal::Application.routes.draw do
  resources :passages, only: [:index, :show]

  root to: 'passages#show'
end
