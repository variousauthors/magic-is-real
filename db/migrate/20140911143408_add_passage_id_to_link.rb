class AddPassageIdToLink < ActiveRecord::Migration
  def change
    add_column :links, :passage_id, :integer
  end
end
