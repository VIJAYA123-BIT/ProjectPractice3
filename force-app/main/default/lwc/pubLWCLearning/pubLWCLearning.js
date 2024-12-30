// pubLWCLearning.js
import { LightningElement, wire, track } from 'lwc';
import {  publish ,MessageContext } from 'lightning/messageService';
// import LearningLmsChannel from '@salesforce/messageChannel/LearningLms__c';
import learningpublms from '@salesforce/messageChannel/learningPubSubLms__c';
export default class PubLWCLearning extends LightningElement {
    @wire(MessageContext) messageContext;
    @track input;
    inputHandler(event) {
        this.input = event.target.value;
        console.log('the input is '+ this.input +' the type of the input is '+ typeof(this.input))
    } 
    publishingHandler() {
        console.log('hey it`s started');
        const payload = {
            userInput: this.input
        };
        console.log("whatever");
        publish(this.messageContext, learningpublms, payload);
        console.log('Published');
    }
}
