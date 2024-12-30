import { LightningElement  ,wire} from 'lwc';
import {CurrentPageReference} from 'lightning/navigation';
import { registerListener, unregisterAllListeners } from 'c/pub_SubConnector';

export default class SubscriberCmp extends LightningElement {
    publisherText='';
    @wire(CurrentPageReference) pageRef;
    connectedCallback(){
        registerListener('EventFromPub', this.setCaptureText, this);
    }
    disconnectedCallback(){
        unregisterAllListeners(this);
    }
    setCaptureText(objPayload){
        this.publisherText = objPayload; 
    }
}