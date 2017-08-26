import { Component } from '@angular/core';
import {FormsModule } from '@angular/forms';
import {ExchangeService } from '../services/exchange.service';

@Component({
  selector: 'my-main',
  templateUrl: `./main.component.html`,
})
export class MainComponent  {  
base:string;
baseValue:number;
userData:any;
res:any;
disableBtn:boolean;
convertValue:any;


	constructor(private service:ExchangeService){
		
		this.userData = false;
		this.res = false;
		this.disableBtn = true;
		
	}

	onCalculate() { 
		if(this.base == this.convertValue) {
			this.res = this.baseValue;
		} else {
			this.res = this.userData.rates[this.convertValue] * this.baseValue;
			console.log(this.convertValue);
		}
		
		 
	}

	onChange() {
		console.log(this.base);
		this.service.exchange(this.base).subscribe((data) => {
			console.log(data);
			this.userData=data;
		})
	}

	validate() {
		
		if(this.base && this.baseValue && this.convertValue) {
			this.disableBtn=false;
		} else {
			this.disableBtn=true;
		}

	

	
	}




}