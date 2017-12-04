import { Component,
  OnInit,
Input } from '@angular/core';

@Component({
  selector: 'app-show-image',
  templateUrl: './show-image.component.html',
  styleUrls: ['./show-image.component.css']
})
export class ShowImageComponent implements OnInit {

  @Input() article;

  displayImage = false;
  
  constructor() { }

  ngOnInit() {
  }

  hideImage(){
    this.displayImage = false;
  }
  showImage(){
    this.displayImage = true;
  }

}
