import { LightningElement,track,wire,api } from 'lwc';
import getMasterworkflowRecords from '@salesforce/apex/FlowTask.getMasterworkflowRecords'
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import { createRecord } from 'lightning/uiRecordApi';
import Master_Demand__c from '@salesforce/schema/Master_workflow_item_list__c.Master_Demand__c'
import Super_Demand__c from '@salesforce/schema/Master_workflow_item_list__c.Super_Demand__c'
import transferRecords from '@salesforce/apex/FlowTask.transferRecords';

export default class FlowsTask extends LightningElement {
    @track Master_Demand__c = '';
    @track Super_Demand__c = '';
    @track recordList=[]
    @track selectedRowsArray=[]
    @track Task='';
    @track data;
    Taskvalue
    getRecords=false
    @api recordId
    @track columns=[
        {label:'Master_Demand__c',fieldName :'Master_Demand__c'},
        {label:'Super_Demand__c',fieldName :'Super_Demand__c'},
        {label:'Task',fieldName :'Task__c'}]
    @wire(getPicklistValues,{recordTypeId:'012000000000000AAA',fieldApiName:Master_Demand__c})MasterDemandValues;
    @wire(getPicklistValues,{recordTypeId:'012000000000000AAA',fieldApiName:Super_Demand__c})SuperDemandValues;
    MasterDemandHandler(event) {
        this.selectedMasterDemand = event.target.value;
    }
    SuperDemandHandler(event){
        this.selectedSuperDemand=event.target.value;
    }
    InputHandler(event){
        this.Task=event.target.value;
        setTimeout(() => {
            this.Taskvalue=this.Task
            console.log('Delayed input:', this.Taskvalue);
        }, 3000);
    }
    CreateRecordHandler(){
        const fields={
            Master_Demand__c:this.Master_Demand__c,
            Super_Demand__c	:this.Super_Demand__c,
            Task__c	:this.Task
        }
        const objectRecord={
            apiName:'Master_workflow_item_list__c',fields
        };
    createRecord(objectRecord).then((record) => {
        console.log('records saved');
        console.log(this.recordList)
    }).catch(error => {
        console.log(error);
    });
    this.Master_Demand__c='';
    this.Super_Demand__c='';
    this.Task='';
    }
    @wire(getMasterworkflowRecords) SObjectRecords({error,data}){
        if(data){
            this.data = data;
        }
        else if(error){
            this.data= undefined;
        }
    }
    GetRecordHandler(){
        this.getRecords=true;
        console.log('please come up with the answer')
        getMasterworkflowRecords().then(response=>{
            this.recordList=response;
            console.log(this.recordList)
            console.log('fetch');
        })
        .catch(error=>{
            console.log(error);
        })
    }
    doubleclickedGetHandler(){
        this.getRecords = false
    }
    @track sourceRecords = [];
    handleSelectedRow(event){
        const selectedRows = event.detail.selectedRows;
        console.log('the selectedRows ',this.selectedRows)
        for ( let i = 0; i < selectedRows.length; i++ ){
            if ( !this.sourceRecords.includes(selectedRows[i].id) ){
                this.sourceRecords.push(selectedRows[i]);
        }
        console.log(selectedRows[i].Id);
        console.log('selected Rows::::'+JSON.stringify(selectedRows));
        console.log('the selected rows are ',this.sourceRecords)
    }}
        transferRecords() {
            transferRecords({ recordId: this.recordId ,sourceRecords: this.sourceRecords })
            console.log('records fetched')
                .then(()=> {
                    console.log('hiiii')
                })
                .catch(error => {
                    this.message = 'Error: ' + error.message;
                });
        }
    }
    
