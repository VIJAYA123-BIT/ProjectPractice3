import { LightningElement ,api } from 'lwc';

export default class TodoApp extends LightningElement {
   //myItem =this.template.querySelector('c-todo-item').itemName
// myitem='suresh'
page=1
previousHandler(){
    if(this.page>1){
        this.page=this.page-1 
    }

}
nextHandler(){
    this.page= this.page+1
}
   
}