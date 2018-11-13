class AddQuestionIdToOptions < ActiveRecord::Migration[5.2]
  def change
    add_index :options, :question_id
  end
end
