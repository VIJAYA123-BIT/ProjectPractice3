import { LightningElement , wire, track } from 'lwc';
import {subscribe,MessageContext} from 'lightning/messageService';
import MetadataDeploymentlms from '@salesforce/messageChannel/MetadataDeploymentlms__c';
export default class MetadataDeploymentSecondComponent extends LightningElement {

   @track flowvalues = [];
    subscription = null;
    @wire (MessageContext) messageContext ;
    connectedCallback(){
        this.subscribeToMessageChannel();
    }
    subscribeToMessageChannel(){
        this.subscription = subscribe(this.messageContext , MetadataDeploymentlms,(message) => this.handleMessage(message));
    }
    handleMessage(message){
        if(message.UserSelectedOption){ // userselectedoption will be sent from MetadataDeploymentlms__c (message service channel)
            console.log('the flowvalues are: '+message.UserSelectedOption);
            this.flowvalues = message.UserSelectedOption;
            console.log('the flow values121 are....'+ this.flowvalues.label);
            console.log('the flowvalues are: '+JSON.stringify(this.flowvalues));
        }
}
handleClick(event){
    const index = event.currentTarget.dataset.index;
}
}
