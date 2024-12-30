import { LightningElement ,wire } from 'lwc';
import { subscribe ,MessageContext } from 'lightning/messageService';
// import LearninglmsChannel from '@salesforce/messageChannel/LearningLms__c';
import learningpublms from '@salesforce/messageChannel/learningPubSubLms__c';
/* https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_salesforce_modules */

export default class SubLwcLearning extends LightningElement {
    inputvalue='';
    subscription =null;

    @wire(MessageContext) messageContext;
    connectedCallback(){
        this.subscribing();
    }
    subscribing(){
        this.subscription = subscribe(this.messageContext ,learningpublms ,(payload)=>this.handleMessage(payload));
    }
    handleMessage(payload){
        console.log('it is subscribed');
        this.inputvalue = payload.userInput;
    }
}