import { LightningElement,wire,track,api } from 'lwc';
import getYear from '@salesforce/apex/HondaEmployeeDetails.getYear';
import getCompany from '@salesforce/apex/HondaEmployeeDetails.getCompany';
// import getFirstName from '@salesforce/apex/HondaEmployeeDetails.getFirstName';
import getRecordDetails from'@salesforce/apex/HondaEmployeeDetails.getRecordDetails';
export default class HondaEmployeeDetails extends LightningElement {
    @track showSurveyYear=false;
    EmployeeDetails=false;
    @track EnteredDetails=false;
    dataHondaEmployeeYear 
    dataHondaEmployeeCompany
    dataHondaEmployeeFirstName
    recordList =[]
    filteredData=[]
    timer
    @track selectedyear
    @track selectedCompany
    @track selectedFirstName
    company
    yearValue;
    firstName;
    get clickedButtonLabel(){
        return this.showSurveyYear? 'Close ':'Start'
    }
    handleClick(event){
        this.showSurveyYear =! this.showSurveyYear
        this.EmployeeDetails=false;
    }
    @wire(getYear) HondaEmployee__c({data,error}){
        if(data){
            this.dataHondaEmployeeYear= data.map(accountrecord=>({
                    label: accountrecord.Year__c,
                    value: accountrecord.Id
            }));
        } else if(error){     
        }
    }
    YearHandler(event){
        console.log('year handeling')
        this.selectedyear= event.target.value;
        const selectedYearObject = this.dataHondaEmployeeYear.find(item => item.value === this.selectedyear);
        console.log('the year u got  '+selectedYearObject.label+ typeof(selectedYearObject))
        if (selectedYearObject) {
            // Access the Year__c property of the selected year object
            this.yearValue = selectedYearObject.label;
            console.log('The selected year is: ' + this.yearValue+ typeof(this.yearValue));
        }
        if(this.selectedyear ){
            this.selectedCompany ='';
            this.selectedFirstName ='';
            this.EnteredDetails=true
            this.EmployeeDetails= false
            getCompany({YearSelected: this.yearValue}).then(result=>{
                this.dataHondaEmployeeCompany =result.map(companyrecord=>({
                    label: companyrecord.companyName__c,
                    value: companyrecord.Id
                }));
            }).catch(error=>{
            })
        }
    }
    CompanyHandler(event){
        this.selectedCompany= event.target.value;
        const selectedCompanyObject = this.dataHondaEmployeeCompany.find(item => item.value === this.selectedCompany);
        if (selectedCompanyObject) {
            this.company = selectedCompanyObject.label;
            console.log('The selected year is: ' + this.yearValue+ typeof(this.yearValue));
        }
        console.log('The company is '+ this.company);
        if(this.selectedCompany){
            this.selectedFirstName ='';
            this.EmployeeDetails= false
            this.EnteredDetails=true
            // getFirstName({CompanySelected : this.company, YearSelected : this.yearValue}).then(result=>{
                
            //     this.dataHondaEmployeeFirstName =result.map(FirstNamerecord=>({
            //         label: FirstNamerecord.Name,
            //         value: FirstNamerecord.Id
            //     }));
            // }).catch(error=>{
            // })
        }
    }
    // FirstNameHandler(event){
    //     this.selectedFirstName=event.target.value;
    //     this.EmployeeDetails= false
    //     const selectedFirstNameObject = this.dataHondaEmployeeFirstName.find(item => item.value === this.selectedFirstName);
    //     console.log('the names are ' +selectedFirstNameObject.label);
    //     this.firstName= selectedFirstNameObject.label
    // }
    SubmitHandler(event){
        // getRecordDetails({CompanySelected : this.company, YearSelected : this.yearValue, firstNameSelected : this.firstName}).then(result =>{
        getRecordDetails({CompanySelected : this.company, YearSelected : this.yearValue}).then(result =>{
            if(result.length>0){
                this.recordList=result;
                this.filteredData = this.recordList;
                this.EmployeeDetails= true
                this.EnteredDetails=false
                console.log('heyy what happened')
            }
            else{
                this.EmployeeDetails= true
                this.EnteredDetails =true
            }
        }).catch(error => {
            console.log(error);
        }); 
    }
    filterHandler(event){
        console.log('search functionalityy')
        const value = event.target.value.toLowerCase();
        window.clearTimeout(this.timer)
        if(value.length>=2){
            console.log('search functionalityy')
            this.timer =window.setTimeout(()=>{
                console.log(value);
                this.filteredData = this.recordList.filter(eachRecord =>{
                        const val = eachRecord.Name?eachRecord.Name:''
                        return val.toLowerCase().includes(value);   
                    }) 
            },500)
        }else {
            this.filteredData =[...this.recordList]
        }
    }
    
}