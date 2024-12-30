import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    handlebuttonRefresh(){
        this.template.querySelector('c-child-component').refresh();
        console.log('happy refresh');
    }
}