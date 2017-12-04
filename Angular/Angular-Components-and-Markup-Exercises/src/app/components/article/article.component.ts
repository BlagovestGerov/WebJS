import { Component,
  OnInit,
  OnChanges,
Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnChanges {

@Input() article;
  counter = 1;
  limit = 0;
  hide = false;
  constructor() { }

  ngOnChanges() {
    this.counter = 1;
    this.limit = 0;
    this.hide = false;
  }

  trunk(string){
    if(string){
    return string.slice(0, (this.counter-1) * 250)
  }
}
  readMore(){
    this.limit = Math.ceil(this.article.description.length/250);
   if( this.limit === this.counter){
    this.hide = true;
   }
   this.counter = this.counter + 1;
  }
  hideText(){
    this.hide = false;
    this.counter = 1;
  }

}
