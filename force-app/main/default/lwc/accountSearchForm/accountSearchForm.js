import { LightningElement } from 'lwc';

export default class AccountSearchForm extends LightningElement {
    searchText=''
    
    
    accountNameChangeHandler(event){
        this.searchText= event.target.value;
    }
    searchClickHandler(){
        console.log(this.searchText)
        console.log('successfully searched..');
        const event = new CustomEvent('searchaccountcontact', {detail:this.searchText});
        this.dispatchEvent(event);

    }
} 