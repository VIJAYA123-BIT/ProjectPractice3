public with sharing class B2B_GetTrain {
    // Define a wrapper class to hold the response data
    public class TrainDetailsResponse {
        @AuraEnabled
        public String trainName { get; set; }
        @AuraEnabled
        public List<Map<String,Object>> recordsList { get; set; }
    }
    @AuraEnabled
    public static TrainDetailsResponse getTrainDetails(String TrainDetails){
        TrainDetailsResponse response = new TrainDetailsResponse();
        Http http = new Http();
        HttpRequest httpRequest = new HttpRequest();
        String endPointUrl = 'https://rappid.in/apis/train.php?train_no=' + TrainDetails;
        httpRequest.setEndpoint(endPointUrl);
        httpRequest.setMethod('GET');
        
        HttpResponse httpResponse = http.send(httpRequest);
        if (httpResponse.getStatusCode() == 200){
            Map<String,Object> responseMap = (Map<String,Object>) JSON.deserializeUntyped(httpResponse.getBody());
            List<Object> records = (List<Object>) responseMap.get('data');
           String responseMapTrainName = (String) responseMap.get('train_name');
            
            //Set the response data into the wrapper class
            response.trainName = responseMapTrainName;
            response.recordsList = new List<Map<String,Object>>();
            for(Object record : records){
                Map<String,Object> recordsMap = (Map<String,Object>) record;
                response.recordsList.add(recordsMap);
            }
        }
        return response;
    }
}
