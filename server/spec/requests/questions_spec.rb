require 'rails_helper'

RSpec.describe 'Questions API', type: :request do

    # intialize test data
    let!(:questions) { create_list(:question, 10) }
    let(:question_id) { questions.first.id }

    # Test GET route
    describe 'GET /questions/api/v1' do

        # request
        before { get '/api/v1/questions' }

        it 'returns questions' do
            expect(json).not_to be_empty
            expect(json.size).to eq(10)
        end

        it 'returns status code 200' do
            expect(response).to have_http_status(200)
        end
    end

    # GET /questions/:id
    describe 'GET /api/v1/questions/:id' do
        before { get "/api/v1/questions/#{question_id}" }

        context 'when the question exists' do
            it 'returns the question' do
                expect(json).not_to be_empty
                expect(json['id']).to eq(question_id)
            end

            it 'returns status code 200' do
                expect(response).to have_http_status(200)
            end
        end
    end
end