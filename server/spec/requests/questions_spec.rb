require 'rails_helper'

RSpec.describe 'Questions API', type: :request do

    # intialize test data
    let!(:questions) { create_list(:question, 10) }
    let(:question_id) { questions.first.id }

    # Test GET route
    describe 'GET /questions' do

        # request
        before { get '/questions' }

        it 'returns questions' do
            expect(json).not_to be_empty
            expect(json.size).to eq(10)
        end

        it 'returns status code 200' do
            expect(response).to have_http_status(200)
        end
    end

    # GET /questions/:id
    describe 'GET /questions/:id' do
        before { get "/todos/#{question_id}" }

        context 'when the question exists' do
            it 'returns the question' do
                expect(json).not_to be_empty
                expect(json['id']).to eq(todo_id)
            end

            it 'returns status code 200' do
                expect(response).to have_http_status(200)
            end
        end

        context 'when the record does not exist' do
            let(:todo_id) { 100 }

            it 'returns status code 404' do
                expect(response).to have_http_status(404)
            end

            it 'returns a not found message' do
                expect(response.body).to match(/Couldn't find Todo/)
            end
        end
    end
end