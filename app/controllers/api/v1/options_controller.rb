module Api::V1
    class OptionsController < ApplicationController
        def index
            @options = Option.all
            render json: @options
        end
    end
end