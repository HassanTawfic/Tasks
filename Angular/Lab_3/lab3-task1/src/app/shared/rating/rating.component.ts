import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit,OnChanges {
  @Input()
  rating:number=3.5;
  cwidth:number=0;
  constructor() {

  }

  ngOnChanges() {
    this.cwidth = this.rating * 15
  }

  ngOnInit(): void {

  }

}
