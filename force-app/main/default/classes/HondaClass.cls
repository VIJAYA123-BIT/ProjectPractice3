public without sharing class HondaClass {
    @AuraEnabled(cacheable=true)
    public static List<HondaEmployee__c> getRecordDetails(){
        List<HondaEmployee__c> employeeFields= [Select Id, Name , Year__c, companyName__c ,Email__c,JobTitle__c, LastName__c from HondaEmployee__c];
        return employeeFields;
    }
}