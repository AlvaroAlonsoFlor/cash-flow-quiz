class Question < ApplicationRecord

    has_many :options, dependent: :destroy
    validates_presence_of :description

end
