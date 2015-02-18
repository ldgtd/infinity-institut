class TableNews < ActiveRecord::Migration
  def change
  	create_table :news do |t|
  		t.string :news
  	end
  end
end
