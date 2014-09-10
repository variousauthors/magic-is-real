class AddDetailIdToStimuli < ActiveRecord::Migration
  def change
    add_column :stimuli, :detail_id, :integer
  end
end
