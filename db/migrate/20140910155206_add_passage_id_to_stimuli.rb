class AddPassageIdToStimuli < ActiveRecord::Migration
  def change
    add_column :stimuli, :passage_id, :integer
  end
end
