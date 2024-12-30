public without sharing class HondaEmployeeDetails {
    @AuraEnabled(cacheable=true)
    public static List<HondaEmployee__c> getYear() {
        List<HondaEmployee__c> YearFields = [Select Id,Year__c from HondaEmployee__c ORDER BY Year__c ASC];
        Set<Decimal> uniqueYears = new Set<Decimal>();
        List<HondaEmployee__c> listOfDuplicateYears= new List<HondaEmployee__c>();
        for(HondaEmployee__c he: YearFields){ 
            decimal yearValue = he.Year__c; // Assuming Year__c is a number field
            if ((!uniqueYears.contains(yearValue))) {
                uniqueYears.add(yearValue);
                listOfDuplicateYears.add(he);
            } 
        }
        return listOfDuplicateYears;
    }
    @AuraEnabled(cacheable=true)
    public static List<HondaEmployee__c> getCompany(Integer YearSelected){
        List<HondaEmployee__c> listOfDuplicateCompanies= new List<HondaEmployee__c>();

        if(YearSelected != null){
            List<HondaEmployee__c> CompanyFields= [Select Id, Year__c, companyName__c from HondaEmployee__c Where Year__c = :YearSelected ORDER BY companyName__c ASC ];
        Set<String> uniqueCompany = new Set<String>();
        for(HondaEmployee__c he: CompanyFields){ 
            String company = he.companyName__c; // Assuming Year__c is a number field
            if ((!uniqueCompany.contains(company))) {
                uniqueCompany.add(company);
                listOfDuplicateCompanies.add(he);
            }
        }
        listOfDuplicateCompanies.sort();
        }
        return listOfDuplicateCompanies;
        }
        
    // @AuraEnabled(cacheable=true)
    // public static List<HondaEmployee__c> getFirstName(String CompanySelected ,Integer YearSelected){
    //     List<HondaEmployee__c> FirstNameFields = new List<HondaEmployee__c>();

    //     if(CompanySelected !='' && YearSelected != null ){
    //         FirstNameFields= [Select Id, Name , Year__c, companyName__c from HondaEmployee__c Where Year__c =:YearSelected and companyName__c =: CompanySelected];
    //         FirstNameFields.sort();
    //     }
    //     return FirstNameFields;
        
    // }
    @AuraEnabled(cacheable=true)
    // public static List<HondaEmployee__c> getRecordDetails(String CompanySelected ,Integer YearSelected , String firstNameSelected ){
    //     List<HondaEmployee__c> employeeFields= [Select Id, Name , Year__c, companyName__c ,Email__c,JobTitle__c, LastName__c from HondaEmployee__c Where Year__c =:YearSelected and companyName__c =: CompanySelected and Name =: firstNameSelected];
    //     return employeeFields;
    // }
    public static List<HondaEmployee__c> getRecordDetails(String CompanySelected ,Integer YearSelected  ){
        List<HondaEmployee__c> employeeFields= [Select Id, Name , Year__c, companyName__c ,Email__c,JobTitle__c, LastName__c from HondaEmployee__c Where Year__c =:YearSelected and companyName__c =: CompanySelected];
        return employeeFields;
    }
}