import { LightningElement,wire } from 'lwc';
import {
    subscribe,
    unsubscribe,
    APPLICATION_SCOPE,
    MessageContext,
  } from "lightning/messageService";
import viewAccountContactsChannel from '@salesforce/messageChannel/viewAccountContactsChannel__c';
import { deleteRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import LightningConfirm from 'lightning/confirm';
import getAccountContacts from '@salesforce/apex/LWCAccountController.getAccountContacts'
export default class AccountContacts extends LightningElement {
    subscription=null
    accountId='';
    title='Contacts';
    contacts=[];
    editableContactId='';
    isShowModalPopup=false;
    @wire(MessageContext)
  messageContext;

  connectedCallback(){
    this.subscribeToMessageChannel();
  }
  get isAccountSelected(){
    return this.accountId? true: false;
  }
  get hasContacts(){
    return this.contacts?.length>0
  }
async getContacts(){
    const data =await getAccountContacts({accountId:this.accountId});
    this.contacts=data;
}
  // Encapsulate logic for Lightning message service subscribe and unsubsubscribe
  subscribeToMessageChannel() {
    if (!this.subscription) {
      this.subscription = subscribe(
        this.messageContext,
        viewAccountContactsChannel,
        (data) => this.handleAccountSelection(data),
        { scope: APPLICATION_SCOPE },
      );
    }
  }
  handleAccountSelection(data){
    this.accountId=data.accountId;
    this.title=`${data.accountName}'s Contacts`;
    this.getContacts();
  }
  disconnectedCallback(){
    this.unsubscribeToMessageChannel();
  }
  unsubscribeToMessageChannel() {
    unsubscribe(this.subscription);
    this.subscription = null;
  }
  editContactHandler(event){
    this.editableContactId = event.target.dataset.contactId;
    this.isShowModalPopup = true;
  }
  async deleteHandler(event){
    let contactId=event.target.dataset.contactId
    const result = await LightningConfirm.open({
        message: 'Are you sure you want to delete contact?',
        variant: 'headerless',
        label: 'confirmation',
        // setting theme would have no effect
    });
    if(result){
        // let contactId=event.target.dataset.contactId;
        let deleteResult=await deleteRecord(contactId);
        this.showToast('Contact Deleted','contact Deleted Successfully','success');
        this.getContacts();
    }
  }
  popupCloseHandler(event){
    this.isShowModalPopup=false;
    this.editContactHandler=null;
  }
  successHandler(){
    this.popupCloseHandler();
    this.getContacts();
  }
  addContactHandler(){
    this.isShowModalPopup=true;
  }
  showToast(title,message,variant) {
    const event = new ShowToastEvent({
        title,
        message,
        variant
    });
    this.dispatchEvent(event);
}
}