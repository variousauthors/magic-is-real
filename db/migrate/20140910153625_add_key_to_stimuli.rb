class AddKeyToStimuli < ActiveRecord::Migration
  def change
    add_column :stimuli, :key, :string
  end
end
