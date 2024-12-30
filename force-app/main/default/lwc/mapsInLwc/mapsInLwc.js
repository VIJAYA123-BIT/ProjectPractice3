import { LightningElement ,wire} from 'lwc';
import getAccounts from '@salesforce/apex/MapControllerLwc.getAccounts';
export default class MapsInLwc extends LightningElement {
    mapMarkers=[]
    // The mapMarkers array likely contains objects representing account locations with latitude, longitude, and other relevant data.
    markersTitle="Accounts Location"
    // The markersTitle probably holds the title or name of the map markers.
    @wire(getAccounts) wireHandler({data,error}){
//  If data is available (i.e., the Apex method call was successful), it logs the data to the console and calls the formatResponse function to process and format the data.
//  If an error occurs during the Apex method call, it logs the error to the console.
        if(data){
            console.log(data);
            this.formatResponse(data)
        }
        if(error){
            console.log(error);
        }
    }
    formatResponse(data){
        this.mapMarkers = data.map(item =>{
            return {
                location:{
                    Street : item.BillingCity || '',
                    City : item.BillingCity || '',
                    PostalCode : item.BillingPostalCode || '',
                    State : item.BillingState || '',
                    Country : item.BillingCountry || '',
                
                },
                icon:'utility:salesforce',
                title:item.Name,
                value:item.Name,
                description: item.description
            }

        } )
        this.selectedMarker=this.mapMarkers.length && this.mapMarkers[0].value
    }
    // This function is likely triggered when a user selects a marker on the map.

    callMarkerHandler(event){
        this.selectedMarker=event.detail.ofAccount 
        // here in place of ofAccount any word can be written.
    }
}