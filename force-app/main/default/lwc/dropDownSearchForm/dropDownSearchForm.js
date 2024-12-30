import { LightningElement,api } from 'lwc';
import getDetails from '@salesforce/apex/DropDownClass.getDetails'


export default class DropDownSearchForm extends LightningElement {
    details=false;
    records=[]
    @api studentselected;
    @api studentNameSelected;
    @api theYear 
    connectedCallback(){
        console.log('the year is  : ',this.theYear)
            console.log('hii')
            this.details=true
            sessionStorage.getItem(this.selectedStudent);
            console.log('the selectedStudent is ', this.selectedStudent)
            // sessionStorage.getItem(this.selectedStudentName);
            const stuName=this.studentselected ;
            console.log('the student name is ',stuName);
            const studName=this.studentNameSelected;
            console.log(stuName,studName)
            // getDetailsa({studName}).then(resulta=>{
            //     this.recordsa = resulta;
            //     console.log("record fetched successfully---1")
            // })
            getDetails({stuName:stuName,selectedStudentName:this.studentNameSelected}).then(result =>{
                this.records = result;
                // const a=result.Students__r;
                // console.log('the selected name is ',a);
                console.log("the records are :" ,this.records)
                console.log("record fetched successfully")
            })
            .catch(error => {
                console.error('Error fetching search results', error);
            });
        
         }
}