import { Injectable } from '@angular/core';
 	import { Http } from '@angular/http';
 	import 'rxjs/add/operator/map';

 	@Injectable()

 	export class ExchangeService{
 		constructor(private http: Http){

 		}

 		
 	exchange(base:string){
 			if(base){
 				return this.http.get('http://api.fixer.io/latest?base='+base).map(data=>data.json());
 			}
 		}

 	}