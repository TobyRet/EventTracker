require 'sinatra'
require 'slim'
require 'json'
require 'sinatra/reloader' if development?

set :public_folder, 'assets'

get '/' do 
	@title = "Home | Event Tracker"
	slim :home
end

get '/events' do
	@title = "Events | Event Tracker"    
	slim :events
end

get '/event/new' do
	slim :new_event
end

post '/event' do	
	content_type :json
	@eventDetails = JSON.parse(request.body.read)
	puts @eventDetails
	puts @eventDetails['name']
	{ redirect_url: "/events" }.to_json
end

get '/blog' do
	@title = "Blog | Event Tracker"
	slim :blog
end

not_found do
	status 404
	slim :not_found 
end




