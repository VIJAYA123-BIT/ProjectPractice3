import { LightningElement, track } from 'lwc';
import getRecordDetails from '@salesforce/apex/HondaClass.getRecordDetails';

export default class HondaEmployeeClass extends LightningElement {
    @track showSurveyYear=false;
    fullData=[];
    @track dataHondaEmployeeYear;
    @track selectedyear;
    @track selectedCompany;
    @track dataHondaEmployeeCompany;
    receivedrecord = false;
    @track filteredData = []
    @track requiredList = []
    EmployeeDetails=false;
    @track EnteredDetails=true;
    get clickedButtonLabel(){
        return this.showSurveyYear? 'Close ':'Start';
    }
    handleClick(event){
        this.showSurveyYear =! this.showSurveyYear
        this.EmployeeDetails=false;
    }
    connectedCallback() {
        getRecordDetails().then(data => {
            this.fullData = data;
            //the below lines are using set method
             // const yearSet = new Set();
            // data.forEach(result => {
            //     yearSet.add(result.Year__c);
            // });
            // const sortedYears = Array.from(yearSet).sort();
            // the below lines are using list method
            const yearList =[];
            this.fullData.forEach(elem => {
                const yearName = elem.Year__c;
                if (!yearList.some(year => year.Year__c === yearName)) {
                    yearList.push({ Year__c: yearName });
                }
            })
            yearList.sort((a, b) => (a.Year__c > b.Year__c) ? 1 : -1);
            this.dataHondaEmployeeYear = yearList.map(year => ({
                label: year.Year__c,
                value: year.Year__c
            }))
        });
    }
    YearHandler(event) {
        this.selectedyear = +event.detail.value;
        const companyList = [];
        if(this.selectedyear){
            this.selectedCompany ='';
            this.EmployeeDetails = false;

            //the below lines are using set method
            // const uniqueCompanySet = new Set();
            //     if (elem.Year__c == this.selectedyear) {
            //         uniqueCompanySet.add(elem.companyName__c);
            //     }
            // })
            // const sortedCompany = Array.from(uniqueCompanySet).sort();
            // the below lines are using list method
            this.fullData.forEach(elem => {
                const companyName = elem.companyName__c;
                if (elem.Year__c == this.selectedyear && !companyList.some(company => company.companyName__c === companyName)) {
                    companyList.push({ companyName__c: companyName });
                }
            })
            companyList.sort((a, b) => (a.companyName__c > b.companyName__c) ? 1 : -1);
        this.dataHondaEmployeeCompany = companyList.map(year => ({
            // label: year,
            // value: year
            label: year.companyName__c,
            value: year.companyName__c
        }))
        }
    }
        CompanyHandler(event) {
            console.log('companyy come yaar')
            this.selectedCompany = event.detail.value;
            // this.RequiredData(this.selectedyear, this.selectedCompany)
        }
        SubmitHandler(){
            this.requiredList=[];
            if(this.selectedyear && this.selectedCompany){
                this.fullData.forEach(elem => {
                    if (elem.Year__c == this.selectedyear && elem.companyName__c == this.selectedCompany) {
                        this.requiredList.push(elem);
                    }
                })
                this.EmployeeDetails= true
                this.EnteredDetails=false
                console.log("RequiredList",JSON.stringify(this.requiredList))
                this.filteredData = this.requiredList
            }
            else{
                this.EmployeeDetails= true
                this.EnteredDetails=true;
            }
        }
        filterHandler(event){
            console.log('search functionalityy')
            const value = event.target.value.toLowerCase();
            if (value.length >= 2) {
                console.log('search functionalityy')
                console.log(value);
                this.filteredData = this.requiredList.filter(eachRecord => {
                    const val = eachRecord.Name ? eachRecord.Name : ''
                    console.log('the record is '+JSON.stringify(eachRecord))
                    return val.toLowerCase().includes(value);
                })

            } else {
                this.filteredData = [...this.requiredList]
            }
        }
        ClearHandler(){
            this.selectedyear='';
            this.selectedCompany='';
            this.filteredData=[];
            this.EnteredDetails=true;
            this.EmployeeDetails= false;
        }
        DesignationDetails=false
        DesignationHandler(){
            console.log('hello designations tab');
            this.DesignationDetails =true;
        }
        CancelDesignationDetails(){
            this.DesignationDetails=false;
        }
    
}