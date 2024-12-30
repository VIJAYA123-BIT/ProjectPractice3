public with sharing class comboBox {
    @AuraEnabled(cacheable=true)
        public static List<Account> getAccounts() {
            return [SELECT Id,Name FROM Account ];
           }
           @AuraEnabled(cacheable=true)
           
           public static List<Contact> getContacts(Id accountId){
               return [SELECT Id, Name FROM Contact where AccountId =: accountId];
               
           }
           @AuraEnabled(cacheable=true)
           public static List<Case> getCase(Id contactId){
               return [SELECT Id,CaseNumber FROM Case where ContactId =: contactId];
               
           }
}