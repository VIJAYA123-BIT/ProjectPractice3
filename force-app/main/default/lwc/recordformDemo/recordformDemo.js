import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
import ACCOUNT from '@salesforce/schema/Account'
import NAME from '@salesforce/schema/Account.Name'
import ANNAUAL_REVENUE from '@salesforce/schema/Account.AnnualRevenue'
import TYPE from '@salesforce/schema/Account.Type'
import INDUSTRY  from '@salesforce/schema/Account.Industry'

export default class RecordformDemo extends LightningElement {
    objectName= ACCOUNT
    fieldList =[NAME,ANNAUAL_REVENUE,TYPE,INDUSTRY]
    successsHandler(event){ 
        console.log(event.detail.id)
        const toastEvent = new ShowToastEvent({
            title:"Account Created",
            message: "Record ID: " + event.detail.id,
            variant:"success"
        })
        this.dispatchEvent(toastEvent)
    }



}