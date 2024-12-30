public with sharing class FilterContactController {
    @AuraEnabled(cacheable= true)
    public static List<Contact> getContactList() {
        return [SELECT Id,Name, Title, Email FROM Contact];

    }
}