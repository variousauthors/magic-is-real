class AddLinkIdToPassages < ActiveRecord::Migration
  def change
    add_column :passages, :link_id, :integer
  end
end
