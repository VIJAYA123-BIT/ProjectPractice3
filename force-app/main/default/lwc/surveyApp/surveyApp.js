import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
import savedRecords from '@salesforce/apex/SurveyFields.savedRecords'
export default class SurveyApp extends NavigationMixin(LightningElement) {
   signIn=false; signUp=false; name=''
   records=[]
   details=false
   signUpHandler(){
        this.signUp=true;
        // this[NavigationMixin.Navigate]({
        //     type:"comm__namedPage",
        //     attributes: {
        //         name:"SurveyForm__c"}}) the above code aslo will work... the below lines are alternative way
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes: {
                url:'/surveyform'
            }
        })
    }
    inputHandlera(event){
        this.name=event.target.value
    }
    // inputHandlerb(event){
    //     this.number=event.target.value
    // }
    signInHandler(){
        this.signIn=true
        console.log('success signin')
    }
submitHandler(){
    this.details=true
    const empName=this.name ;
    savedRecords({empName}).then(result =>{
        this.records = result;
        console.log("record fetched successfully")
    })
    .catch(error => {
        console.error('Error fetching search results', error);
    });

}
}
