export class Quote {
  public author: string = "";
  public content: string = "";
  public score: number = 0;
  constructor(content = "", author=""){
  	this.author = author;
  	this.content = content;
  }
}
