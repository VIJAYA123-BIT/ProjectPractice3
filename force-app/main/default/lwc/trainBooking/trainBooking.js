import { LightningElement } from 'lwc';

export default class TrainBooking extends LightningElement {
    From
    To
    Date
    FromHandler(event){
        this.From = event.target.value;
    }
    ToHandler(event){
        this.To = event.target.value;
    }
    DateHandler(event){
        this.Date = event.target.value;
    }
    get sortByOptions(){
        return [
            {label:"All Classes",value: 'All Classes'},
            {label:"Anubhuti Class (EA)", value:'Anubhuti Class (EA)'},
            {label:"AC First Class (1A)", value: 'AC First Class (1A)'},
            {label:"Vistadome AC (EV)",value: 'Vistadome AC (EV)'},
            {label:"Exec. Chair Car (EC)",value: 'Exec. Chair Car (EC)'},
            {label:"AC 2 Tier (2A)",value: 'AC 2 Tier (2A)'},
            {label:"First Class (FC)",value: 'First Class (FC)'},
            {label:"AC 3 Tier (3A)",value: 'AC 3 Tier (3A)'},
            {label:"Sleeper (SL)",value: 'Sleeper (SL)'}
        ]
    }
    sortHandler(event){
        this.sortedBy = event.target.value;
    }
}