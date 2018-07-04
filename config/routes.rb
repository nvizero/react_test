Rails.application.routes.draw do
  
  get 'index'  	, :to => "home#index"
  get 'tbtn'  	, :to => "home#tbtn"
  get 'gib' 	, :to => "home#gib"

end
