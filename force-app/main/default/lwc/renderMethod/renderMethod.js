import { LightningElement } from 'lwc';
import signInTemplate from './signInTemplate.html'
import signUpTemplate from './signUpTemplate.html'
import renderTemplate from './renderMethod.html'
export default class RenderMethod extends LightningElement {
    selection=''
    // render(){
    //     return renderTemplate
    // }
    render(){
        return this.selection === 'Signup'? signUpTemplate:
               this.selection === 'Signin' ? signInTemplate :
                renderTemplate
    }
    handleClick(event){
        this.selection=event.target.label // see clearly here event.target.value
    }
    submithandler(event){
        console.log( `${event.target.label} successfully `)
    }

}