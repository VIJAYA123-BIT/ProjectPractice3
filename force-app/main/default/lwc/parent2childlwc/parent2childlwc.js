import { LightningElement } from 'lwc';

export default class Parent2childlwc extends LightningElement {
    countValue=0;
    handleDecrement(){
        this.countValue--;
    }
    handleIncrement(){
        this.countValue++;
    }
}