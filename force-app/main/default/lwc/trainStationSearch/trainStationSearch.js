import { LightningElement ,track  } from 'lwc';
import { ShowToastEvent } from "lightning/platformShowToastEvent";

import getTrainDetails from '@salesforce/apex/B2B_GetTrain.getTrainDetails'
import backgroundUrl from '@salesforce/resourceUrl/TrainApi';
// import backgroundUrlVideo from '@salesforce/resourceUrl/TrainVideore'
import logoUrl from '@salesforce/resourceUrl/IrctcLogo';
const COLUMNS = [
    { label: 'station name', fieldName: 'station_name',type :'text' },
    { label: 'platform', fieldName: 'platform', type: 'text' },
    { label: 'distance', fieldName: 'distance', type: 'text' },
    { label: 'delay', fieldName: 'delay', type: 'text' }
];
export default class TrainStationSearch extends LightningElement {
    logoImageUrl = logoUrl;
    // videoUrl =backgroundUrlVideo;
    get backgroundStyle() {
        return `height:40rem;background-image:url(${backgroundUrl})`;
    }
    
    @track isLoading = false;
    errorMsg
    trainNo
    cols=COLUMNS;
    trainName=''
    @track TrainData=[]
    inputHandler(event){
        this.trainNo = event.target.value;
        this.istrain=false
    }
    searchHandler(){
        this.isLoading=true
        this.getTrain();
    }
    async getTrain(){
        console.log('the process is started')
            await getTrainDetails({TrainDetails:this.trainNo}).then(result =>{
                    this.trainDetails = result;
                    let response = JSON.stringify( this.trainDetails.recordsList);
                    this.TrainData = result.recordsList;
                    this.trainName = result.trainName
                    if(this.TrainData){
                    this.isLoading = false;
                    this.istrain=true;
                    this.dispatchEvent(
                        new ShowToastEvent({
                          title: "Success",
                          message: "record created",
                          variant: "success",
                        }),
                        console.log('hello showToast event')
                      );
                    }
                    else{
                        this.isLoading = false
                        this.istrain=false
                        this.errorMsg='Please enter valid train number';
                        this.dispatchEvent(
                            new ShowToastEvent({
                              title: "Error creating record",
                              message: error.body.message,
                              variant: "error",
                            }),
                            console.log('hello showToast error event')
                
                          );
                    }
                }).catch(error => {
                    this.error = error;
                    console.error('Error:', error);
                  

                });
                
    }
    clearHandler(){
        this.istrain =false;
        this.trainNo='';
        this.errorMsg='';
    }
}

