FactoryBot.define do
    factory :question do
        description { Faker::Movie.quote }
    end
end