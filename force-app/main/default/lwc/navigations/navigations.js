import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class Navigations extends NavigationMixin(LightningElement) {
    navigateToAccountHome(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName :'Account',
                actionName:'home'
            }
        });
    }
    navigateToAccountRecordView(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'001Ig000002Yf5CIAS',
                objectApiName:'Account',
                actionName:'view'
            }
        })
    }
    navigateToAccountRecordEditPage(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'001Ig000002Yf5CIAS',
                objectApiName: 'Account',
                actionName:'edit'
            }
        })
    }
    navigateToNewRecordPage(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Account',
                actionName:'new'
            }
        })
    }
    navigateToRecordList(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordRelationshipPage',
            attributes:{
                recordId :'001Ig000002Yf5CIAS',
                objectApiName:'Account',
                actionName:'view',
                relationshipApiName:'Contacts'
            }
        })
    }
    navigateToLink(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName :'Account',
                actionName:'home'
            }
        }).then((url)=> {
            console.log('the link is :'+url);
            window.open(url,' blank')

        }).catch(error =>{
            console.log(error)
        })
    }


}