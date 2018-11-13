class CreateOptions < ActiveRecord::Migration[5.2]
  def change
    drop_table :options
    create_table :options do |t|
      t.string :answer
      t.integer :points
      t.references :question, foreign_key: true

      t.timestamps
    end
  end
end
