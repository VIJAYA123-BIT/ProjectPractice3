import { LightningElement } from 'lwc';

export default class RestApiTest extends LightningElement {
    RandomJoke=''
    calloutURL ='https://icanhazdadjoke.com';
    // submitHandler(){
    //     console.log('do you want to here the jokee' )
    //     // const calloutURL = "https://icanhazdadjoke.com";
    //     fetch(this.calloutURL,{
    //         method : 'GET',
    //         headers :{
    //             Accept : 'application/json'
    //         }
    //     }).then(response =>{
    //         if(response.ok){
    //             return response.json();
    //         }
    //     }).then(result =>{
    //         this.RandomJoke = result.joke;
    //     })
    // }
    async submitHandler(){
        const response = await fetch(this.calloutURL, {
            method :'GET',
            headers :
            {
                Accept : 'application/json'
            }
        });
        const resp = await response.json();
        if(response.ok){
            this.RandomJoke = resp.joke;
        }
    }
}