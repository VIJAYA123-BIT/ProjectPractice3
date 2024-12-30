import { LightningElement } from 'lwc';
import Id from '@salesforce/user/Id'
import IS_GUEST from '@salesforce/user/isGuest'


export default class UserInformation extends LightningElement {
    userId =Id;
    isGuest = IS_GUEST;


}