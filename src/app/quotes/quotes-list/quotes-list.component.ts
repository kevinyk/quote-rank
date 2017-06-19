import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.css']
})
export class QuotesListComponent implements OnInit {
  @Input() myQuotes;
  @Output() quoteListEventEmitter = new EventEmitter;
  @Output() deleteQuoteEventEmitter = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }
  vote(index, change){
    console.log(index, change);
  	this.quoteListEventEmitter.emit({index:index, change:change});
  }
  delete(index){
    this.deleteQuoteEventEmitter.emit(index);
  }
}
