import { LightningElement,track  } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import getRecords from '@salesforce/apex/createRecords.getRecords';
export default class CreateRecords extends LightningElement {
    name=''
    subject=''
    @track recordList=[] 
    @track  recordsRecived= false
    RecordName(event){
        this.name=event.target.value;
    }
    SubjectName(event){
        this.subject=event.target.value;
    }
    addHandler(){
        const fields={
            Name:this.name,
            Subject__c	:this.subject
        }
        const objectRecord={ 
            apiName:'Record__c'
            ,fields
        };
    createRecord(objectRecord).then((record) => {
        console.log('records saved');
        console.log(this.recordList)
    }).catch(error => {
        console.log(error);
    });
    this.name='';
    this.subject='';
    }
    FetchHandler(){
        console.log('please come up with the answer')
        getRecords().then(response=>{
            this.recordList=response;
            console.log(this.recordList)
            this.recordsRecived=true; 
            console.log('fetch');
        })
        .catch(error=>{
            console.log(error);
        })
    
    }
}
 