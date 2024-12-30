import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/FilterContactController.getContactList';
export default class FilteringAndSorting extends LightningElement {
    headings=["Id","Name","Title","Email"]
    fullTableData=[]
    filteredData=[]
    timer
    filterBy="Name"
sortedBy="Name"
sortDirection='asc'
    @wire(getContactList) ContactHandler({data,error}){
        if(data){
            console.log(data)
            this.fullTableData = data
           // this.filteredData = data
 this.filteredData = [...this.sortBy(data)]
        }
        if(error){
            console.log(error)
        }
    }
    get FilterByOptions(){
        return [
            {label:"All",value: 'All'},
            {label:"Id", value:'Id'},
            {label:"Name", value: 'Name'},
            {label:"Title",value: 'Title'},
            {label:"Email",value: 'Email'}
        ]
    }
    get sortByOptions(){
        return [
            {label:"All",value: 'All'},
            {label:"Id", value:'Id'},
            {label:"Name", value: 'Name'},
            {label:"Title",value: 'Title'},
            {label:"Email",value: 'Email'}
        ]
    }
    filterByHandler(event){
        this.filterBy = event.target.value

    }
    filterHandler(event){
        const {value} = event.target;
        window.clearTimeout(this.timer)
        if(value){
            this.timer =window.setTimeout(()=>{
                console.log(value);
                this.filteredData = this.fullTableData.filter(eachRecord =>{
                    if(this.filterBy === 'All'){
                        //Below logic will filter each and every property of object.
                        return Object.keys(eachRecord).some(key =>{
                        return eachRecord[key].toLowerCase().includes(value)
                            
                    })

                    }else{
                        //Below logic will filter only selected fields
                        const val = eachRecord[this.filterBy]?eachRecord[this.filterBy]:''
                        return val.toLowerCase().includes(value)
                    }
                    
                    //Object.keys(eachRecord)=["Id","Name","Title","Email"]
                    //the below logic will filter each and every property of the object  
                    // return Object.keys(eachRecord).some(key =>{
                    //     return eachRecord[key].toLowerCase().includes(value)
                    // })
                })

            },500)
            

        }else {
            this.filteredData =[...this.fullTableData]
        }
        
    }


 /*sorting functionss.... */
 sortHandler(event){
    this.sortedBy = event.target.value;
    this.filteredData =[...this.sortBy(this.filteredData)];
}
//Basic functionality of sorting....
sortBy(data){
    const cloneData=[...data]
    cloneData.sort((a,b)=>{
        if(a[this.sortedBy] === b[this.sortedBy]){
            return 0
        }
        return this.sortDirection === 'desc'? 
        a[this.sortedBy] > b[this.sortedBy] ? -1:-1:
        a[this.sortedBy] < b[this.sortedBy] ? -1:-1
        
    })
    return cloneData
}
}
