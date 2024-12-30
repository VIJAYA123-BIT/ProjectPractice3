public with sharing class SurveyFields  {
    @AuraEnabled(cacheable= true)
    public static List<EmployeeSurvey__c> getRecords(){
        return [SELECT Id,Name,EmployeeId__c,Phone_Number__c, Email__c FROM EmployeeSurvey__c ORDER BY CreatedDate DESC LIMIT 1];
    }
    @AuraEnabled  (cacheable= true) 
    public static List<EmployeeSurvey__c> savedRecords(String empName ){
        return [SELECT Id,Name,EmployeeId__c,Phone_Number__c, Email__c FROM EmployeeSurvey__c where Name =: empName ];
    }
    
}