import { LightningElement,api,wire,track } from 'lwc';
import getStudentNameData from '@salesforce/apex/DropDownClass.getStudentNameData'
import getStudentClassData from '@salesforce/apex/DropDownClass.getStudentClassData'
import getDetails from '@salesforce/apex/DropDownClass.getDetails'
import {NavigationMixin} from 'lightning/navigation'

export default class Dropdowns extends NavigationMixin(LightningElement)  {
    StudentNameData
    selectedStudent='';
    selectedStudentName='';
    StudentClassData
    selectedClass
    StudentYearData
    selectedYear
    records=[]
    details=false
    detailsa=false
    @wire(getStudentClassData) StudentRecordsb({data,error}){
        if(data){
            this.StudentYearData= data.map(accountrecord=>({
                    label: accountrecord.Year__c,
                    value: accountrecord.Id
            }));
            this.StudentClassData= data.map(accountrecord=>({
                label: accountrecord.Name,
                value: accountrecord.Id
        }));
        } else if(error){     
        }
    }
    YearHandler(event){
        this.selectedYear=event.target.value;
        sessionStorage.setItem('accvalue', this.selectedYear)
        if(this.selectedYear){
            console.log(this.selectedYear)
        }
    }
    ClassHandler(event){
        this.selectedClass= event.target.value;
        sessionStorage.setItem('accvalue', this.selectedClass)
        if(this.selectedClass){
            console.log(this.selectedClass);
            this.selectedStudent=this.selectedClass
            sessionStorage.setItem('selectedStudent',this.selectedStudent);
            getStudentNameData({studentName: this.selectedClass}).then(result=>{
                this.StudentNameData =result.map(accountrecord=>({
                    label: accountrecord.Name,
                    value: accountrecord.Id
                }));
            }).catch(error=>{
            })
        }
    }
    NameHandler(event){
        this.selectedStudentName=event.target.value;
        sessionStorage.setItem('The selectedStudentName value ',this.selectedStudentName);
        console.log('the selected student : ',this.selectedStudentName);
    }
    
    searchHandler(){
        console.log('hii')
        this.details=true
        const stuName=this.selectedStudent ;
        const studName=this.selectedStudent;
        console.log(stuName,studName)
        getDetails({stuName:stuName,selectedStudentName:this.selectedStudentName}).then(result =>{
            this.records = result;
            const a=result.Students__r;
            console.log('the selected name is ',a);
            console.log("the records are :" ,this.records)
            console.log("record fetched successfully")
        })
        .catch(error => {
            console.error('Error fetching search results', error);
        });
     }
}