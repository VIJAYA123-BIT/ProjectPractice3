import { LightningElement } from 'lwc';

export default class ParentToChild extends LightningElement {
    mydata={Name:"somanath" ,company:"isro"};
    percentage=20;
    percenta=true;
    time=true;
    
    handleonchange(event){
        this.percentage=event.target.value;
    }
    handlebuttonRefresh(){
        this.template.querySelector('c-child-to-parent').refresh();
        console.log('happy refresh');
    }
}