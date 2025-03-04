
public with sharing class metadataApi {
    @AuraEnabled(cacheable = true)
    public static List<FlowDefinitionView> FirstmetadataApi(string ComponentName) {
        List<FlowDefinitionView> flowsData = new List<FlowDefinitionView>();
        if(ComponentName =='Flow'){
             flowsData= [SELECT Id, Label FROM FlowDefinitionView ];
        }
        return flowsData;
    }
}