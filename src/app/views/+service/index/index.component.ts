import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  animations: [
    trigger("fadeInOut", [
      state(
        "void",
        style({
          opacity: 0
        })
      ),
      transition("void <=> *", animate(1000))
    ])
  ]
})
export class IndexComponent implements OnInit {
  color: string;
  otherColor: string;

  constructor() {}

  ngOnInit() {
    this.color = 'white';
    this.otherColor = 'green';
  }

}
