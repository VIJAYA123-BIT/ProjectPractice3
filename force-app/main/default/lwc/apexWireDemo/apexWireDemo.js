import { LightningElement,wire } from 'lwc';
import apexWireMethod from '@salesforce/apex/apexWire.apexWireMethodDemo'
export default class ApexWireDemo extends LightningElement {
 
account;
accountList
selectedType= ''
@wire(apexWireMethod)  accounts;
// console.log('the data is '+apexWireMethod);
// connectedCallback(){


// console.log('the accounts are '+accounts.data);

// }
//  @wire(apexWireMethod) accountHandler({data,error}){
//     if(data){
//         this.accountList = data.map(item =>{
//         })
        
//     } 
//     if(error){
//         console.error(error)
//     }
//  }
} 