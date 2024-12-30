import { LightningElement,api} from 'lwc';

export default class SetterDemoChild extends LightningElement {
    
    @api person
    horse
    
    @api 
    get animal(){
        return this.horse;
    }
    set animal(data){
        // data.salary = data.salary*2
        let newSalary = data.salary*2
        //this.horse=data
        this.horse={...data ,salary:newSalary, age: 34}

    }
    
}