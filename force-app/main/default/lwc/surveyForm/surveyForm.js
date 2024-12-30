import { LightningElement,track,api} from 'lwc';
import {createRecord} from 'lightning/uiRecordApi';
//import sendEmail from '@salesforce/apex/SurveyFields.sendEmail'
import getRecords from '@salesforce/apex/SurveyFields.getRecords'
export default class SurveyForm extends LightningElement {
    name=''
    number=''
    Email=''
    PhoneNo=''
    teaching=''
    communication=''
    ist=false
    record=false
    recordList=[]
    feedback=true
    submittedName = '';
    submittedNumber = '';
    submittedEmail = '';
    submittedPhoneNo = '';
    inputHandlera(event){
        this.name=event.target.value; 
        this.submittedName=this.name;
    }
    inputHandlerb(event){
        this.number=event.target.value;
        this.submittedNumber=this.number;
    }
    inputHandlerc(event){
        this.Email =event.target.value;
        this.submittedEmail=this.Email;
    }
    inputHandlerd(event){
        this.PhoneNo= event.target.value;
        this.submittedPhoneNo=this.PhoneNo;
    }
    options = [
        { label: 'Average', value: 'Average', selected: false },
        { label: 'Good', value: 'Good', selected: false },
        { label: 'Better', value: 'Better', selected: false },
        { label: 'Best', value: 'Best', selected: false }
    ];
    optionsA = [
        { label: 'Average', value: 'Average', selected: false },
        { label: 'Good', value: 'Good', selected: false },
        { label: 'Better', value: 'Better', selected: false },
        { label: 'Best', value: 'Best', selected: false }
    ];
    handleChange(event) {
        const selectedValue = event.target.value;
        this.options = this.options.map(option => {
            option.selected = option.value === selectedValue;
            if(option.selected){
                this.communication=option.value;
                this.teaching=option.value
            }
            return option;
        });
    }
    SubmitHandler(){
        this.ist=true
        const fields = {    
                Name: this.name,
                EmployeeId__c: this.number,
                Phone_Number__c:this.PhoneNo,
                Email__c:this.Email,
                CommunicationSkills__c:this.communication,
                Way_Of_Teaching__c	:this.teaching
               
            }
             const objectRecord = {
                apiName : 'EmployeeSurvey__c',
                fields
        };

        createRecord(objectRecord).then(response => {
            console.log('record get saved !');
        }).catch(error => {
                console.log(error);
        });
    }
    details=false
    showHandler(){
        this.details=true
        this.name='';
        this.number='';
        this.Email='';
        this.PhoneNo='';
    }  
    recordHandler(){
        console.log('success')
        getRecords().then(response => {
            this.recordList = response;
            // this.record=true;
        }).catch(error => {
            console.log(error);
        })
    }
}
