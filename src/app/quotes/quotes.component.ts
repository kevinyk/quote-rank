import { Component, OnInit } from '@angular/core';
import { Quote } from './../quote';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes = [new Quote("I'm coocoo for cocoa puffs", "sonny the chocolate addicted tropical bird")];
  
  constructor() { }

  ngOnInit() {
  }
  dataFromChild(data){
  	console.log(data);
  	this.quotes.push(data);
  }
  dataFromChildList(data){
  	console.log(data);
  	this.quotes[data.index].score += data.change;
  }
  deleteItemInList(data){
  	this.quotes.splice(data, 1);
  }

}
