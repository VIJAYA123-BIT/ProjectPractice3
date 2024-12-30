import { LightningElement,track } from 'lwc';

export default class ConditionalRendering extends LightningElement {
   @track isVisible=false;
   @track doubleClick=false;
   @track boolVisible=false;
  
   name=''
    newButton(){
        this.isVisible=true
    }
    closeButton(){
        this.doubleClick=true
    }
     //clickedButtonLabel='Show';
    // handleClick(event) {  
    //     const label = event.target.label;  
  
    //     if ( label === 'Show' ) {  
  
    //         this.clickedButtonLabel = 'Hide';  
    //         this.boolVisible = true;  
  
    //     } else if  ( label === 'Hide' ) {  
              
    //         this.clickedButtonLabel = 'Show';  
    //         this.boolVisible = false;  
  
    //     }  
    // }  
 // Instead of writing from the 15-30 lines the below lines can be replaced
    get clickedButtonLabel(){
        return this.boolVisible? 'Hide detail ':'Show detail'
    }
    handleClick(event){
        this.boolVisible =! this.boolVisible
    }



    changeHandler(event){
        this.name=event.target.value;
    }
    get helloMethod(){
        return this.name ==='hello'
    }
    //getter demo
    //country='India';
    country
    get isCountryIndia(){
        return this.country === "India"
    }
    changeIfElse(event){
        this.country =event.target.value
    }
    newcountry
    get isCountryAustralia(){
        return this.newcountry === "Australia"
    }
    get isCountryCanada(){
        return this.newcountry ==="Canada"
    }
    changeIfElse1(event){
        this.newcountry =event.target.value
    }
    carList=["ford","audi","maruti","hyundai","mercedes"]
    ceolist=[
        {
            id:1,
            company :"Google",
            name:"Sundar pichayya"
        },
        {
            id:2,
            company :"Apple",
            name:"Tim cook"
        },
        {
            id:3,
            company :"Facebook",
            name:"Mark"
        },
        {
            id:4,
            company :"Amazon",
            name:"jeff"
        }
    ]
    
  
}  

    
