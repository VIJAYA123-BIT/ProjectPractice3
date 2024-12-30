import { LightningElement,api } from 'lwc';

export default class TodoItem extends LightningElement {
    @api itemName='hihkl';
    previousHanler(){
        this.dispatchEvent(new CustomEvent('previous'))
    }
    nextHandler(){
        this.dispatchEvent(new CustomEvent('next'));
    }
}