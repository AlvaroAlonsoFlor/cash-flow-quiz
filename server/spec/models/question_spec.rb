require 'rails_helper'

RSpec.describe Question, type: :model do
    # Association, question should have many options
    it {should have_many(:options).dependent(:destroy)}

    # Validation, question needs to have a description
    it {should validate_presence_of(:description)}
end