public with sharing class createRecords {
    @AuraEnabled
    public static  List<Record__c> getRecords(){
        return [SELECT Name,Subject__c FROM Record__c];
}
} 