class AdminController < ApplicationController
	layout 'admin'

	before_action :authenticate_admin!

	def show
		@new = New.first
	end
end
