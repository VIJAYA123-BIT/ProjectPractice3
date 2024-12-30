import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {
    constructor(){
        super()
        console.log('child constructor call')
    }
    //mounted phase
    connectedCallback(){
        console.log('hi, this is child connectedCallback')
        //explicitly throwing the error  which comes for the error phose 
        throw new Error("Loading of child component failed")

    }
    // mounted phase
    renderedCallback(){
        console.log('hii, i am child renderCallback')
    }
    //mounted phase
    disconnectedCallback(){
        alert('child disconnectedcallback called')
        console.log('hii , i am child disconnected callback')
    }

}