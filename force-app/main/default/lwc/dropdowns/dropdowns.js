import { LightningElement,api,wire,track } from 'lwc';
import getStudentNameData from '@salesforce/apex/DropDownClass.getStudentNameData'
import getStudentClassData from '@salesforce/apex/DropDownClass.getStudentClassData'
// import getStudentYearData from '@salesforce/apex/DropDownClass.getStudentYearData'
import getDetails from '@salesforce/apex/DropDownClass.getDetails'
import getDetailsa from '@salesforce/apex/DropDownClass.getDetails'

export default class Dropdowns extends LightningElement  {
    StudentNameData
    selectedStudent='';
    selectedStudentName='';
    StudentClassData
    selectedClass
    StudentYearData
    selectedYear
    studentYear
    studentClass
    studenName
    recentDetails
    records=[]
    recordsa=[]
    year;
    details=false
    detailsa=false
    @wire(getStudentClassData) StudentRecordsb({data,error}){
        if(data){
            this.StudentYearData= data.map(accountrecord=>({
                    label: accountrecord.Year__c,
                    value: accountrecord.Id
            }));
        } else if(error){     
        }
    }
    YearHandler(event){
        this.selectedYear=event.target.value;
this.year=this.selectedYear
console.log(this.selectedYear);
        sessionStorage.setItem('accvalueYear', this.selectedYear)
        if(this.selectedYear){
            console.log(this.selectedYear)
        }
    }
    @wire(getStudentClassData) StudentRecordsa({data,error}){
        if(data){
            this.StudentClassData= data.map(accountrecord=>({
                    label: accountrecord.Name,
                    value: accountrecord.Id
            }));
        } else if(error){     
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
        sessionStorage.setItem('selectedStudentName',this.selectedStudentName);
        console.log('the selected student : ',this.selectedStudentName);
    }
    
    searchHandler(){
        console.log('hii')
        this.details=true
        const stuName=this.selectedStudent ;
        const studName=this.selectedStudent;
        console.log(stuName,studName)
        // getDetailsa({studName}).then(resulta=>{
        //     this.recordsa = resulta;
        //     console.log("record fetched successfully---1")
        // })
       
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
    RecentsearchHandler(){
        // if(sessionStorage.getItem('id')){
        //     //An Id key is in the session Storage
        //     this.sessionStorageOptionId = sessionStorage.getItem('id');

        //     //Clear session storage after getting the Id
        //     sessionStorage.clear();
        // }
        this.recentDetails=true;
        if(sessionStorage.getItem('accvalueYear')){
            this.studentYear=sessionStorage.getItem('accvalueYear');
            
        }
        if(sessionStorage.getItem('accvalue')){
            this.studentClass=sessionStorage.getItem('accvalue');

        }
        if(sessionStorage.getItem('selectedStudentName')){
            this.studenName=sessionStorage.getItem('selectedStudentName');
        }
    }
    // search=false
    // searchHandler(){
    //     console.log(this.selectedYear,this.selectedStudent,this.selectedClass)
    //     this.search=true;
    //     this[NavigationMixin.Navigate]({
    //         type:'standard__webPage',
    //         attributes: {
    //             url:'/dropdownsearchform'
    //         },
    //         state:{
    //             c__theYear : this.year
    //             // c__studentselected : this.selectedStudent,
    //            // c__studentNameSelected : this.selectedStudentName


    //         }
    //     })

    }

