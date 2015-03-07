class StaticsController < ApplicationController
  def show
    @contact = Contact.new()
    @new = New.first

    render 'statics/show'
  end

  def create
    @contact = Contact.new()

    @contact = params[:contact]

    flash[:notice] = "Message envoyé"
    Mailer.contact(@contact).deliver
    redirect_to action: 'show'
  end

  private

  def contact_params
    params.require(:contact).permit(:email, :name, :message)
  end
end
