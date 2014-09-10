class AddStimulusIdToStimuli < ActiveRecord::Migration
  def change
    add_column :stimuli, :stimulus_id, :integer
  end
end
