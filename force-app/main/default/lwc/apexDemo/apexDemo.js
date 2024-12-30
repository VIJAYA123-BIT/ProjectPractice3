import { LightningElement, track } from 'lwc';
import ApexWireMethod from '@salesforce/apex/apexWire.apexWireMethod';

export default class ApexDemo extends LightningElement {
    @track accounts;
    dataPresent=false;
 
    handleClick(){
        ApexWireMethod().then(response => {
            this.dataPresent = true;
            this.accounts = response;
        }).catch(error => {
            console.log(error); 
        }) 
    }
}