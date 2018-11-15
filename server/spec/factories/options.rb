FactoryBot.define do
    factory :option do
        answer { Faker::StarWars.character }
        question_id nil
    end
end