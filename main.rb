require 'sinatra'
require 'slim'
require 'sinatra/reloader' if development?

set :public_folder, 'assets'

get '/' do 
	@title = "Home | Old Empire"
	slim :home
end

get '/events' do
	@title = "Events | Old Empire"
	slim :events
end

get '/blog' do
	@title = "Blog | Old Empire"
	slim :blog
end

not_found do
	status 404
	slim :not_found #To do, create views 
end




