module RequestSpecHelper
    #Parse json from the test requests
    def json
        JSON.parse(response.body)
    end
end