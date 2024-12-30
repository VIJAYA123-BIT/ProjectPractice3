import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils'
export default class NavigateToHome extends NavigationMixin(LightningElement) {
    navigateToHome(){
        this[NavigationMixin.Navigate]({
            //type:'standard__namedPage',
            type: 'standard__objectPage',
            attributes:{
            //pageName: 'home'
            objectApiName :'Record__c',
            actionName: 'list'
            }
        })
    }
        navigateToChatter(){
            this[NavigationMixin.Navigate]({
                type:'standard__namedPage',

                attributes:{
                pageName: 'chatter'
                
                }
            })
            
    
    }
    navigateTosObject(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',

            attributes:{
                objectApiName :'Record__c',
                actionName: 'new'
            
            }
        })

}
navigateusingpredefinedTosObject(){
    const predefinedvalues = encodeDefaultFieldValues({
        FirstName :'Zero',
        LastName: 'Hero',
        LeadSource : 'Other'

    })
    this[NavigationMixin.Navigate]({
        type: 'standard__objectPage',
        attributes:{
            objectApiName :'Contact',
            actionName: 'new'

        },
        state:{
            defaultFieldValues: predefinedvalues
        }
    })
}

navigateToFiles(){
    this[NavigationMixin.Navigate]({
        type:'standard__objectPage',
        attributes:{
            objectApiName:'ContentDocument',
            actionName: 'home'
        }
    })
}
recordViewMode(){
    this[NavigationMixin.Navigate]({
        type: 'standard__recordPage',
        attributes :{
            recordId :'0012w00001abAcnAAE',
            objectApiName: 'Account',
            actionName :'view'
        }

    })
}
recordEditMode(){
    this[NavigationMixin.Navigate]({
        type: 'standard__recordPage',
        attributes :{
            recordId : '0012w00001abAcnAAE',
            objectApiName :'Account',
            actionName :'edit'
        }
    })
}

navigateToTab(){
    this[NavigationMixin.Navigate]({
        type : 'standard__navItemPage',
        attributes :{
            apiName : 'LifeCycle_Hooks'
        }
    })
}

navigateToRelatedRelationship(){
    this[NavigationMixin.Navigate]({
        type : 'standard__recordRelationshipPage',
        attributes :{
            recordId :'0012w00001LGI1kAAH',
            objectApiName :'Account',
            relationshipApiName :'Contacts',
            actionName :'view'

        }

    })
}

navigateToWebPage(){
    this[NavigationMixin.Navigate]({
        type: 'standard__webPage',
        attributes :{
            url : 'https://www.google.com'

        }
    })
}

navigateTolwc(){
    var defination ={
        componentDef: 'c:navigationLwcTarget'

    }
    this[NavigationMixin.Navigate]({
        type: 'standard__webpage',
        attributes:{
            url:'/one/one.app#'+btoa(JSON.stringify(defination))
           //url:'/Users/VI20422272/Desktop/JS/lwc project/lwcrProjectPractce/force-app/main/default/lwc/lifeCycleHooks'+btoa(JSON.stringify(defination))
        }
    })
}
}
