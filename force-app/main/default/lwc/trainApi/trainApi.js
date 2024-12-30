import { LightningElement ,track } from 'lwc';
import getTrainDetails from '@salesforce/apex/B2B_GetTrain.getTrainDetails'
const COLUMNS = [
    { label: 'station name', fieldName: 'station_name',type :'text' },
    { label: 'platform', fieldName: 'platform', type: 'text' },
    { label: 'distance', fieldName: 'distance', type: 'text' },
    { label: 'delay', fieldName: 'delay', type: 'text' }
];
export default class TrainApi extends LightningElement {
    trainNo
    cols=COLUMNS;
    trainName=''
    @track TrainData=[]
    istrain=false
    inputHandler(event){
        this.trainNo = event.target.value;
    }
    searchHandler(){
        this.istrain=true
        this.getTrain();
    }
    async getTrain(){
            await getTrainDetails({TrainDetails:this.trainNo}).then(result =>{
                    this.trainDetails = result;
                    if(result){
                        let response = JSON.stringify( this.trainDetails.recordsList);
                        this.TrainData = result.recordsList;
                        this.trainName = result.trainName
                        console.log('the data is '+this.TrainData)
                        console.log('the response is '+ response);
                    }
                    else{
                        console.log('the data is sucks')
                    }
                }).catch(error => {
                    this.error = error;
                    console.error('Error:', error);
                });
    }
}
