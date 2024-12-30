import { LightningElement ,track } from 'lwc';

export default class Practice1 extends LightningElement {
    fullname = "Vijaya Durga Kondepudi";
    title='';
    obj = {
        name: "malleswari",
        age:22,
        fantasy: "drawing"

    }
    //methods which r also called functions
    getTitle(event){
        this.title = event.target.value
    }
    trackHandler(event){
        this.city =event.target.value;
        //this.address={...this.address,"city":this.city}
    }
    @track userList=["a","b","c"]
    p=''
    trackHandler1(event){
        this.userList[0]="abc"
    }
    @track address={
        city : "paris",
        postcode :533255,
        country :'India'

    };
    /** getters usage... */
    users=["jon","smith","nik"];

    num1=10
    num2=20
    get firstUser(){
        return this.users[0].toUpperCase();

    }
    get multiply(){
        return this.num1*this.num2;
    }


    

}