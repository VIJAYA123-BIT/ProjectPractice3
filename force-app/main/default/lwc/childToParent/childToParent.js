import { LightningElement,api } from 'lwc';

export default class ChildToParent extends LightningElement {
    @api fielddata;
    @api percentdata; 
    @api times
    get style(){
        return `background-color:red; min-height:50px; width: ${this.percentdata}%; min-width:10px; border:1px solid black`;
    }
    timestamp=new Date();
    
    @api 
    refresh(){
        this.timestamp = new Date();
    }
}