import { LightningElement } from 'lwc';

export default class PostOfficeApi extends LightningElement {
    pincode
    cityname
    inputHandler(event){
        this.pincode= event.target.value;
        
    }
    inputHandler1(event){
        this.cityname= event.target.value;
    }
    SearchHandler(){
        
    }
}