import { LightningElement } from 'lwc';

export default class LifeCycleHooks extends LightningElement {
    isChildVisible=false;
    constructor(){
        super()
        console.log('parent constructor call')
    }
    connectedCallback(){
        console.log('hi, this is parent connectedCallback')


    }
    renderedCallback(){
        console.log('hii, i am parent renderCallback')
    }
    // name 
    // changeHandler(event){
    //     this.name=event.target.value;
    // }
    handleClick(){
       this.isChildVisible=!this.isChildVisible;
    }
    //explicity throwing the error which is of error phase the one error is written in lifeCycleChild component
    errorCallback(error,stack){
        console.log(error.message)
        console.log(stack)
    }
}