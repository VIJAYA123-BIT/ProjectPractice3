public with sharing class DropDownClass {
    @AuraEnabled(cacheable= true)
    public static List<Students__c> getStudentNameData(String studentName) {
        return [SELECT Id,Name from Students__c WHERE ClassData__c =: studentName ];
    }
    @AuraEnabled(cacheable= true)
    public static List<ClassData__c> getStudentClassData() {
        return [SELECT Id,Name,Year__c from ClassData__c];
    }
    // @AuraEnabled(cacheable= true)
    // public static List<ClassData__c> getStudentYearData() {
    //     return [SELECT Id,Year__c from ClassData__c];
    // }
    @AuraEnabled(cacheable= true)
    public static List<ClassData__c> getDetails(String stuName,String selectedStudentName) {
        // return [SELECT Id,Name,StudentRollid__c,Year__c,Percentage_Of_Attendence__c from ClassData__c  WHERE Id = :stuName];
        return [SELECT Id,(SELECT Name FROM Students__r WHERE Id =:selectedStudentName),Name,StudentRollid__c,Year__c,Percentage_Of_Attendence__c from ClassData__c  WHERE Id = :stuName Limit 1];
    }
    
    // @AuraEnabled(cacheable= true)
    // public static List<Students__c> getDetailsa(String studName) {
    //     // return [SELECT Id,Name,StudentRollid__c,Year__c,Percentage_Of_Attendence__c from ClassData__c  WHERE Id = :stuName];
    //     return [SELECT Id,Name from Students__c WHERE Id =: studName];
    // }
} 