class Admin::NewsController < AdminController
  def new
    @new = New.new
  end

  def create
    @new = New.new(new_params)

    respond_to do |format|
      if @new.save
        format.html { redirect_to admin_path }
        flash[:notice] = 'News créée avec succèes'
      else
        flash.now[:error] = @new.errors.full_messages.join("<br />")
        format.html { render action: 'new' }
      end
    end
  end

  def edit
    @new = New.find(params[:id])
  end

  def update
    @new = New.find(params[:id])
    @new.update!(new_params)

    redirect_to admin_path, notice: 'News mise à jour avec succèes'
  end

  def destroy
    @new = New.find(params[:id])
    @new.destroy!

    redirect_to admin_path, alert: 'News supprimée avec succèes'
  end

  private

  def new_params
    params.require(:new).permit(:news)
  end
end
