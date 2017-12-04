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

  
  visible: boolean = true;
  @Output() open: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();

  @Input('gameProp') game : Game;
  @Output() onReacted = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  react(likeOrDislike : boolean){
    this.onReacted.emit(likeOrDislike);
  }

   
  toggle() {
    this.visible = !this.visible;
    if (this.visible) {
      this.open.emit(null);
    } else {
      this.close.emit(null);
    }
  }

}
