import { LightningElement,wire} from 'lwc';
import {subscribe,MessageContext} from 'lightning/messageService';
import CountingUpdate from '@salesforce/messageChannel/Counting_Update__c'
export default class SubLWC extends LightningElement {
    counter=0;
    subscription=null;
    @wire(MessageContext) messageContext

    connectedCallback(){ 
        this.subscribeToMessageChannel();

    }
    subscribeToMessageChannel(){
        this.subscription=subscribe(this.messageContext,
            CountingUpdate,
            (message) => this.handleMessage(message)) 
    }
    handleMessage(message){
        if(message.operator == 'add'){
            this.counter +=message.constant;
        }
        else if(message.operator == 'subtract'){
            this.counter -= message.constant;
        }
        else if(message.operator == 'multiply'){
            this.counter *= message.constant;
        }
    }
}