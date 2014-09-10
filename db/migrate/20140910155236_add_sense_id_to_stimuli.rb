class AddSenseIdToStimuli < ActiveRecord::Migration
  def change
    add_column :stimuli, :sense_id, :integer
  end
end
