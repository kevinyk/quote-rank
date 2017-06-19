import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from './../../quote';

@Component({
  selector: 'app-quotes-add',
  templateUrl: './quotes-add.component.html',
  styleUrls: ['./quotes-add.component.css']
})
export class QuotesAddComponent implements OnInit {
  @Output() addQuoteEventEmitter = new EventEmitter();
  newQuote = new Quote();
  constructor() { }

  ngOnInit() {
  }
  addQuote(){
  	console.log(this.newQuote);
  	this.addQuoteEventEmitter.emit(this.newQuote);
    this.newQuote =  new Quote();
  }


}
