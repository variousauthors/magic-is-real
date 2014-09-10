class CreatePassages < ActiveRecord::Migration
  def change
    create_table :passages do |t|
      t.string :name

      t.timestamps
    end
  end
end
