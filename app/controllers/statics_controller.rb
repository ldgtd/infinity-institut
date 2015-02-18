class StaticsController < ApplicationController
  def index
  	@new = New.first

  	render 'statics/index'
  end
end
