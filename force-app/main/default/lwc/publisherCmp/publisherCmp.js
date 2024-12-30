import { LightningElement,wire } from 'lwc';
import { fireEvent } from 'c/pub_SubConnector';
import {CurrentPageReference} from 'lightning/navigation';

export default class PublisherCmp extends LightningElement {
    text='';
    @wire(CurrentPageReference) objReference;
    inputHandler(event){
        this.text = event.target.value;
    }
    publishEvent(){
        fireEvent(this.objReference , 'EventFromPub', this.text);
    }
}