import { LightningElement ,wire,track} from 'lwc';
import getAccounts from '@salesforce/apex/comboBox.getAccounts';
import getContacts from '@salesforce/apex/comboBox.getContacts';
import getCase from '@salesforce/apex/comboBox.getCase';
export default class ComboBox extends LightningElement {
    dataAccountrecord
    selectedAccount
    @track selectedacc;
    dataContactrecord
    selectContact
    @track selectedcon;
    dataCaserecord
    @wire(getAccounts) Accounts({data,error}){
        if(data){
            this.dataAccountrecord= data.map(accountrecord=>({
                    label: accountrecord.Name,
                    value: accountrecord.Id
            }));
        } else if(error){     
        }
    }
    ContactHandler(event){
        this.selectedAccount = event.target.value
        console.log('the selected account is : '+this.selectedAccount);
        sessionStorage.setItem('accvalue', this.selectedAccount)
        console.log(this.selectedAccount)
        if(this.selectedAccount){
            getContacts({accountId: this.selectedAccount}).then(result=>{
                this.dataContactrecord =result.map(contactrecord=>({
                    label: contactrecord.Name,
                    value: contactrecord.Id
                }));
            }).catch(error=>{
            })
        }
    }
    caseHandler(event){
        this.selectContact = event.target.value 
        console.log('contactvalue', this.selectContact)
        sessionStorage.setItem('convalue', this.selectContact)
        if(this.selectContact){
            getCase({contactId :this.selectContact}).then(result=>{
                this.dataCaserecord =result.map(caserecord=>({
                    label: caserecord.CaseNumber,
                    value: caserecord.Id
                }));
                
            }).catch(error=>{

            })
        }
       
        }


        prepopulatefields(){
            this.selectedacc = sessionStorage.getItem('accvalue')
            let convalue=sessionStorage.getItem('convalue');
            this.selectedcon =convalue;
            //this.selectedcon =sessionStorage.getItem('convalue')
            console.log('acc',this.selectedacc);
            console.log('con',this.selectedcon);
        }

        

        connectedCallback(){
            this.prepopulatefields();
        }
    }
