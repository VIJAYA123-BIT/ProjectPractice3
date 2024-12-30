import { LightningElement,api } from 'lwc';
export default class Childtoparentlwcdup extends LightningElement {
   
   message = '';
   records=''
   @api childsecondtemplate 
   @api childfirsttemplate
   @api  childthirdtemplate
   childfirsttemplate =true;
   childsecondtemplate = true;
   childthirdtemplate = true
    printing(){
        console.log(this.childsecondtemplate, this.childfirsttemplate)
    }
    addHandler() {
        this.dispatchEvent(new CustomEvent('increase'));
    }
    messageHandler(event) {
        this.message = event.target.value;
    }
    sendHandler() {
        this.dispatchEvent(new CustomEvent('messager', { detail: this.message  }));
    }
    recordHandler(event){
        this.records =event.target.value;
    }
    fetchHandler(){
        this.dispatchEvent(new CustomEvent('records',{detail:this.records}))
    }
}
