FactoryBot.define do
    factory :option do
        answer { Faker::StarWars.character }
        points { Faker::Number.number(2 ) }
        question_id 1
    end
end