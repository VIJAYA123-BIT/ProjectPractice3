import { LightningElement,api } from 'lwc';

export default class SetterDemoParent extends LightningElement {
    // @api detail;
    Details = {
        name: "Raghav",
        age:25
    }

    horse ={
        salary: 10000,
        qualification: "second"
    
    }
}