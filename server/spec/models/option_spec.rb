require 'rails_helper'

RSpec.describe Option, type: :model do

    # Association, option belongs to question
    it {should belong_to(:question)}

end