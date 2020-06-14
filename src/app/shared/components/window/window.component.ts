import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-window',
  template: `
     <div [ngClass]="class" class="container mat-elevation-z8" fxLayout="row wrap" fxLayoutAlign="start start">
      <div fxFlex="1 1 100%" fxLayoutAlign="start center">
        <ul style="list-style: none; padding-left: 5px; height: 14px; margin-top: 8px;">
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      <div class="picture" [ngStyle]="{'background-image': 'url('+imageUrl+')'}"
        fxFlex="1 1 100%" fxLayoutAlign="center center">
      </div>
    </div>
  `,
  styles: [`
    ul > li {
      position: relative; float: left; background-color: white; width: 15px; margin: 5px; height: 15px; border-radius: 50%;
    }

    .black {
      background-color: #000;
    }

    .green {
      background-color: #348D53;
    }

    .window:hover {
      transform: scale(1.01);
      z-index: 1030;
    }

    .container {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }

    .picture {
      min-height: 360px;
      height: auto;
      padding: 35px;
      background-position: center center;
    }


  `]
})
export class WindowComponent implements OnInit {
  @Input() imageUrl: string;
  @Input() class: string = 'black';

  constructor() {}

  ngOnInit() {}
}
