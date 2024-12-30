import {LightningElement,api } from "lwc";
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class Gettersetterchild extends LightningElement {
    heroData;
    filteredHeroes;
    numbers
    @api
    get parentData() {
      return this.heroData;
    }
    set parentData(value) {
      this.heroData = value;
      this.filterHeroes();
    }
    filterHeroes() {
      this.filteredHeroes = this.heroData.filter((item) => item.ranking <= 3);
    }
    @api 
    get ext(){
        return this.numbers;
    }
    set ext(value){
        this.numbers = value;
    }
    showMessage(){
      const event = new ShowToastEvent({
        Title :'Toast Message',
        variant: 'success',
        message: 'Getter setter is completed',
        mode :'dismissable' // for disappearing of toast message
        
      })
      this.dispatchEvent(event);
    }
  }
  