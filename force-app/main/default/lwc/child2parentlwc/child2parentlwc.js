import { LightningElement } from 'lwc';

export default class Child2parentlwc extends LightningElement {
   
    SubtractHandler(){
       
        this.dispatchEvent(new CustomEvent('subtract'));
    }
    AddHandler(){
        this.dispatchEvent(new CustomEvent('add'));
    }
}