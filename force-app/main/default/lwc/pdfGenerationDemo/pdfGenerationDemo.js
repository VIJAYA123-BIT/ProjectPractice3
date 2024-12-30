import { LightningElement,api } from 'lwc';
import generatePDF from '@salesforce/apex/pdfController.generatePDF'
export default class PdfGenerationDemo extends LightningElement {
    @api recordId
    imageUrl = 'https://w7.pngwing.com/pngs/490/225/png-transparent-v-letter-a-letter-miscellaneous-angle-text-thumbnail.png'
    invoiceData={
        invoiceNo:'123',
        invoiceCreated:'January 1, 2019',
        invoiceDue:'January 10, 2020',
        companyName:'Sparksuite, Inc.',
        address1:'12345 Sunny Road',
        address2:' Sunnyville, CA 12345'
    }
    clientData={
        client:'Acme Corp',
        username:'John Doe',
        email:'john@example.com'
    }
    services=[
        {name:'Consultant fee', amount:1000.00},
        {name:'Website design', amount:300.00},
        {name:'Hosting (3 months)', amount:75.00}
    ]

    // var total = [0, 1, 2, 3].reduce(function(sum, value) {
    //     return sum + value;
    //     }, 0);
    //     total is 6
//     reduce() is javaScript array method,  actually this is the syntax of this method :

// syntax : array.reduce(function(total, currentValue, currentIndex, arr), initialValue)


    get totalAmount(){
        return this.services.reduce((total,service)=>{
            return total=total+service.amount
        } ,0)
    }
    pdfHandler(){
        let c =this.template.querySelector('.container')
        console.log(c.outerHTML);
        generatePDF({recordId: this.recordId,htmlData:c.outerHTML}).then(result=>{
            console.log("attachment id",result)
            window.open(`https://wiprocom609-dev-ed.develop.file.force.com/servlet/servlet.FileDownload?file=${result.Id}`)
        }).catch(error =>{
            console.error(error)
        })
    }
}