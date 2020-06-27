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

      <article>
        <div
          class="container"
          fxLayout="row wrap"
          fxLayoutAlign="center center"
          fxFlex="1 1 100%"
          [@FadeInOut]
        >
          <div class="item" style="padding-top: 30px; padding-bottom: 30px;"
             fxFlex="1 1 100%" fxFlex.lt-md="1 1 100%" fxLayout="row wrap" fxLayoutAlign="center center">

            <img width="100%" src="./assets/img/matricula.png">

          </div>
        </div>
      </article>
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
