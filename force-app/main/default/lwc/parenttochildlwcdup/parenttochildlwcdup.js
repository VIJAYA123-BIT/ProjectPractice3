import { LightningElement } from 'lwc';
import apexWireMethod from '@salesforce/apex/apexWire.apexWireMethod'
export default class Parenttochildlwcdup extends LightningElement {
    countvalue = 0;
    valuereceived;
    recordsreceived;
    accountlist=[]
    sectemp =false
    firtemp =false
    thitemp =false
    parentfirstTemplate =true
    parentsecondTemplate =true
    parentthirdTemplate = true
    incrementhandler() {
        this.countvalue++;
    }
    receiverhandler(event) {
        this.valuereceived = event.detail;
    }
    fetchrecordshandler(event){
        this.recordsreceived =event.detail;
        apexWireMethod().then(result =>{
            if(result){
                // this.accountlist  = result
                // const arr= this.accountlist.slice(0,this.recordsreceived);
                this.accountlist = result.slice(0, this.recordsreceived)
            }
        }).catch(error =>{
            console.log(error);
        })


    }
}
 