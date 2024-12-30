import { LightningElement } from 'lwc';

export default class AccountSearch extends LightningElement {
    
    searchText='';
    //declarative approach..
    searchAccountContactHandler(event){
        this.searchText=event.detail;

    }
}
