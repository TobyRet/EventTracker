require 'sinatra'

set :public_folder, 'assets'

get '/' do 
	@title = "Home | Old Empire"
	erb :home
end

get '/events' do
	@title = "Events | Old Empire"
	erb :events
end

get '/blog' do
	@title = "Blog | Old Empire"
	erb :blog
end

not_found do
	status 404
	erb :not_found #To do, create views 
end




