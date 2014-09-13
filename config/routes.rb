MagicIsReal::Application.routes.draw do
  resources :passages, only: [:show]

  root to: 'passages#show'
end
