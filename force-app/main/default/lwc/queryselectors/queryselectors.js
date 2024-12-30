import { LightningElement } from 'lwc';

export default class Queryselectors extends LightningElement {
    userNames=["ram","shiva","vasu","satya","priya","harshitha"]
    fetchdata(){

        console.log(this.template.querySelector('h1'))
        const elem=this.template.querySelector('h1')
        console.log(elem.innerText);

        const userElements =this.template.querySelectorAll('.name')
        console.log("the array element is  "+elem.innerText)
        Array.from(userElements).forEach(item =>{
            console.log(item.innerText)
        })

        //lwc: manual demo
        const childElem=this.template.querySelector('.child')
        childElem.innerHTML= '<p>Hey i am a child element </p>'
    }
    
}