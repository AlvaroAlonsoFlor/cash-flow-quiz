require 'rails_helper'

RSpec.describe 'Options API', type: :request do

    # intialize test data
    let!(:questions) { create(:question) }
    let!(:options) { create_list(:option, 10) }
    let(:question_id) { question.id }
    let(:option_id) { options.first.id }

    # Test GET route
    describe 'GET /options/api/v1' do

        # request
        before { get '/api/v1/options' }

        it 'returns options' do
            expect(json).not_to be_empty
            expect(json.size).to eq(10)
        end

        it 'returns status code 200' do
            expect(response).to have_http_status(200)
        end
    end

end