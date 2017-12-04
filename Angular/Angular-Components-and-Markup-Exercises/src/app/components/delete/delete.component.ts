import { Component,
  OnInit,
   Output,
   Input,
  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  @Input() article
  @Output() deleteArticleEmitter: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  deleteArticle(targetId: number): void{
    this.deleteArticleEmitter.emit(targetId)
  }

}
