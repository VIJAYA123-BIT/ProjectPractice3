import { LightningElement,api } from 'lwc';

export default class ToastEvents extends LightningElement {

    showComponent = true;

    @api Rating;

    textValue;

    hideComponent(){

        this.showComponent = false;

    }

    connectedCallback(){

        if(this.Rating == 'Hot'){

            this.textValue = 'Rating is Hot please verify the Account Record';

        }else if(this.Rating == 'Warm'){

            this.textValue = 'Rating is warm please verify the Account Record';

        }

       

    }

 

}