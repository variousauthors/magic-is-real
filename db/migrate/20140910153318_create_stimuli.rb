class CreateStimuli < ActiveRecord::Migration
  def change
    create_table :stimuli do |t|
      t.text :content

      t.timestamps
    end
  end
end
