import { Component,
  OnInit,
Input,
Output,
EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() incomingArticle
  @Output() selection: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  sendData(targetId){
    this.selection.emit(targetId)
  }

}
