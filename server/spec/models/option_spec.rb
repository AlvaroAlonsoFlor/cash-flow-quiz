require 'rails_helper'

RSpec.describe Option, type: :model do

    # Association, option belongs to question
    it {should belong_to(:question)}

    # Validation, option must have an answer and points
    it {should validate_presence_of(:answer)}
    it {should validate_presence_of(:points)}

end