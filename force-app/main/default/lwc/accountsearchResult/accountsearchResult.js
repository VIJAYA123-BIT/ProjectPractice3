import { LightningElement,api,wire } from 'lwc';
import getAccounts from '@salesforce/apex/LWCAccountController.getAccounts';
import { publish,MessageContext } from 'lightning/messageService';
import viewAccountContactsChannel from '@salesforce/messageChannel/viewAccountContactsChannel__c';
const COLUMNS = [
    { label: 'Id', fieldName: 'Id' },
    { label: 'Name', fieldName: 'Name' },
    { label: 'Actions', type: 'button',typeAttributes :{
        label:"view Contacts",
        name:"view Contacts",
        title:"view Contacts",
        value:"view_Contacts",
    }},
    
];
 
export default class AccountsearchResult extends LightningElement {
    @api searchText
    columns=COLUMNS;
    @wire(getAccounts,{searchText:'$searchText'}) accountsList;
    @wire(MessageContext) messageContext;

  // Respond to UI event by publishing message
  handleContactSelect(event) {
    const payload = { recordId: event.target.contact.Id };

    publish(this.messageContext, recordSelected, payload);
  }
  rowActionHandler(event){
    if(event.detail.action.value =='view_Contacts'){
        const payload = { accountId: event.detail.row.Id ,accountName: event.detail.row.Name };
    publish(this.messageContext, viewAccountContactsChannel, payload);
    }
  }
}