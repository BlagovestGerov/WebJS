import { Component,
  OnInit,
  Input,
  Output,
  EventEmitter } from '@angular/core';
import { Game } from './../../game'

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Input('gameProp') game : Game;
  @Output() onReacted = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  react(likeOrDislike : boolean){
    this.onReacted.emit(likeOrDislike);
  }

}
