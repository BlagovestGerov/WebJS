import { Component,
OnInit } from '@angular/core';



import { Seed } from './seed'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  data;
  selectedArticle: Object;

  ngOnInit(){
    this.data = Seed;
  }

  showDetails(targetId){
    this.selectedArticle = this.data.find(x=> x.id===targetId)
  }

  deleteTargetArticle(targetId){
    this.data = this.data.filter(el => Number(el.id) !== Number(targetId));
    this.selectedArticle = {};
  }



}
