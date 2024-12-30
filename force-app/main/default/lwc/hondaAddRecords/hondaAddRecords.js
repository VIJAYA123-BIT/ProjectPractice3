import { LightningElement, track } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import HondaEmployee__c_OBJECT from "@salesforce/schema/HondaEmployee__c";
import Year_FIELD from "@salesforce/schema/HondaEmployee__c.Year__c";
import companyName_FIELD from "@salesforce/schema/HondaEmployee__c.companyName__c";
import Name_FIELD from "@salesforce/schema/HondaEmployee__c.Name";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
export default class HondaAddRecords extends LightningElement {
    RecordYear=''
    RecordCompany='' 
    RecordName =''
    HandleChangeYear(e){
        this.RecordYear = e.target.value
    }
    HandleChangeCompany(e){
        this.RecordCompany = e.target.value
    }
    HandleChangeName(e){
        this.RecordName = e.target.value

    }
    addHandler(){
        console.log('the year is '+ this.RecordYear);
        console.log('the company is '+ this.RecordCompany);
        console.log('the name is '+ this.RecordName);
        const fields={};
        fields[Year_FIELD.fieldApiName] = this.RecordYear
        fields[companyName_FIELD.fieldApiName] = this.RecordCompany
        fields[Name_FIELD.fieldApiName] = this.RecordName
        const recordInput={
            apiName:HondaEmployee__c_OBJECT.objectApiName,fields
        };
    createRecord(recordInput).then(record => {
        console.log('saved to the object')
        console.log('the records are '+JSON.stringify(record))
        this.dispatchEvent(
            new ShowToastEvent({
              title: "Success",
              message: "record created",
              variant: "success",
            }),
            console.log('hello showToast event')
          );
    }).catch(error => {
        console.log('hiii not saving the record')
        this.dispatchEvent(
            new ShowToastEvent({
              title: "Error creating record",
              message: error.body.message,
              variant: "error",
            }),
            console.log('hello showToast error event')

          );
        console.log(error);
    });
    this.RecordYear='';
    this.RecordCompany='';
    this.RecordName='';
    }
}