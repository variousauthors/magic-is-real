class CreateDetails < ActiveRecord::Migration
  def change
    create_table :details do |t|
      t.string :key
      t.integer :stimulus_id

      t.timestamps
    end
  end
end
