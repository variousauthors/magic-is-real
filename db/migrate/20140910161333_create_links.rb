class CreateLinks < ActiveRecord::Migration
  def change
    create_table :links do |t|
      t.string :key
      t.integer :stimulus_id

      t.timestamps
    end
  end
end
