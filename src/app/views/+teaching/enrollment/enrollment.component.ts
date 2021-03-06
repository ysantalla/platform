import { Component, OnInit } from '@angular/core';
import {
  FadeInOut,
} from '@app/core/animations/app.animation';


@Component({
  selector: 'app-enrollment',
  template: `
    <div fxLayout="row wrap" fxLayoutAlign="center center">
    <div fxLayout="row wrap" fxFlex="1 1 83%" fxFlex.lt-md="1 1 100%" fxLayoutAlign="center center">
      <div
        fxFlex="1 1 100%"
        fxFlex.lt-md="1 1 100%"

        fxLayout="row wrap"
        fxLayoutAlign="center center"
        [@FadeInOut]>
        <h1>{{ "enrollment" | transloco }}</h1>

      </div>

      <mat-divider fxFlex="1 1 100%"></mat-divider>


    </div>

    </div>
    <div fxLayout="row wrap" fxLayoutAlign="center center">
    <div fxLayout="row wrap" fxFlex="1 1 93%" fxFlex.lt-md="1 1 100%" fxLayoutAlign="center center">

      <app-enrollment-svg fxFlex="1 1 100%"></app-enrollment-svg>

    </div>

    </div>
  `,
  styles: [],
  animations: [FadeInOut],
})
export class EnrollmentComponent implements OnInit {

  constructor() {}

  ngOnInit() {

  }
}
