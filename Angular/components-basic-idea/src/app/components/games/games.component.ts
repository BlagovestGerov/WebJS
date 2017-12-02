import { Component, OnInit, OnDestroy } from '@angular/core';
import { Game } from './../../game'

@Component({
  selector: 'games-list',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games : Game[];
  showContent : boolean;
  likes : number;
  dislikes : number;

  constructor() {
    this.likes = 0;
    this.dislikes = 0;
   }

   showAdditionalContent(phone : string):void{
     this.showContent = true;
   }
  ngOnInit() {
    this.games = [
      new Game("Assassin's Creed", "Ubisoft", 100),
      new Game("Battlefield 3", "EA", 200),
      new Game("Call Of Duty", "Activision", 55)
        ];
  }
  ngOnDestroy(){
    console.log('DELETED');
  }

  ngOnChanges(changes): void{
    console.log(changes);
  }

  onReacted(likeOrDislike: boolean){
    likeOrDislike ? this.likes++ : this.dislikes++;
  }

}
