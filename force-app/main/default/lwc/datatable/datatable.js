import { LightningElement , wire, track} from 'lwc';
import accountValues from '@salesforce/apex/apexWire.apexWireMethodDemo';
const columns =[{label :'Name',fieldName :'Name',type : 'text'}]
export default class Datatable extends LightningElement {
    columns = columns;
    @track accounts =[]
    @track firstcolumn=[]

    @wire(accountValues) wiredAccounts({ error, data }) {
        if (data) {
            this.accounts = data;
            this.firstcolumn = this.accounts.map(account => account.Name);
            console.log('the account names are '+ this.accounts.map(account => account.Name))
        } else if (error) {
            console.error('Error fetching accounts:', error);
        }
    }
}