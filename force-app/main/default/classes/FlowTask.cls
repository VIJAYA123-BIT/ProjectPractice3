public with sharing class FlowTask {
    @AuraEnabled(cacheable=true)
    public static List<Master_workflow_item_list__c> getMasterworkflowRecords(){
        return [SELECT Id,Master_Demand__c,Super_Demand__c,Task__c FROM Master_workflow_item_list__c ];
    }
        @AuraEnabled
        public static List<Default_master_workflow_item_list__c> transferRecords(Id recordId,List<Master_workflow_item_list__c> sourceRecords) {
            try {
                // Perform any necessary data transformation
                List<Master_workflow_item_list__c> sourceObject=[SELECT Id,Master_Demand__c,Super_Demand__c,Task__c FROM Master_workflow_item_list__c WHERE Id IN : sourceRecords];
                List<Default_master_workflow_item_list__c> targetRecordsToInsert = new List<Default_master_workflow_item_list__c>();
                for (Master_workflow_item_list__c sourceRecord : sourceObject) {
                    Default_master_workflow_item_list__c targetRecord = new Default_master_workflow_item_list__c();
                    targetRecord.Default_Workflow__c=recordId;
                    targetRecord.Master_Demand__c = sourceRecord.Master_Demand__c; // Example field mapping
                    targetRecord.Super_Demand__c = sourceRecord.Super_Demand__c; // Example field mapping
                    targetRecord.Task__c = sourceRecord.Task__c; // Example field mapping
                    targetRecordsToInsert.add(targetRecord);
                }
                insert targetRecordsToInsert;
                return targetRecordsToInsert;
            } catch (Exception ex) {
                throw new AuraHandledException(ex.getMessage());
            }
        }
    }
    
    

    