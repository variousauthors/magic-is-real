MagicIsReal::Application.routes.draw do
  resource :passages, only: [:show]

  root to: 'passages#show'
end
