Rails.application.routes.draw do
  
  get 'index'  	, :to => "home#index"
  get 'tbtn'  	, :to => "home#tbtn"
  get 'gib' 	, :to => "home#gib"

  get 'game1' 	, :to => "home#game1"
  get 'game2' 	, :to => "home#game2"
  get 'game3' 	, :to => "home#game3"
  get 'game4' 	, :to => "home#game4"

  get 'game5' 	, :to => "home#game5"
  get 'game6' 	, :to => "home#game6"
  get 'game7' 	, :to => "home#game7"
  get 'game8' 	, :to => "home#game8"

  get 'game9' 	, :to => "home#game9"

end
