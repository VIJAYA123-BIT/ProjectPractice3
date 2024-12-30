public with sharing class apexWire {
    @AuraEnabled()
    public static List<Account> apexWireMethod() {
        return [Select Id, Name,Type, Industry FROM Account LIMIT 5];

    }
 

    @AuraEnabled(cacheable = true )
    public static List<Account> apexWireMethodDemo() {
        return [Select Id, Name,Type, Industry FROM Account LIMIT 5];

    } 
    // @AuraEnabled(cacheable=true) 
    // public static List<Account> filterAccountType(string type) {
    //     return [Select Id, Name,Type, Industry FROM Account where  TYPE=:type LIMIT 2];

    // }

}