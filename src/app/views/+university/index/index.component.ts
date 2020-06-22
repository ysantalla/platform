import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";

@Component({
  selector: "app-index",
  template: `
  <div fxLayout="row wrap" fxLayoutAlign="center center">
    <div fxLayout="row wrap" fxFlex="1 1 85%" fxFlex.lt-md="1 1 100%" fxLayoutAlign="center center">
      <div
        style="padding-top: 10px;"
        fxFlex="1 1 100%"
        fxFlex.lt-md="1 1 100%"

        fxLayout="row wrap"
        fxLayoutAlign="center center"
        [@fadeInOut]>
        <h1>{{ "whoWeAre" | transloco }}</h1>

      </div>

      <mat-divider fxFlex="1 1 100%"></mat-divider>

      <article [ngClass]="color">
        <div
          class="container"
          fxLayout="row wrap"
          fxLayoutAlign="center start"
          fxFlex="1 1 100%"
          [@fadeInOut]
        >
          <div class="item" fxFlex="1 1 48%" fxFlex.lt-md="1 1 100%">
            <h2 class="mat-h2">{{ "university" | transloco }}</h2>

            <p>
              {{'universityMessage' | transloco}}
            </p>

            <h2 class="mat-h2">{{ "mission" | transloco }}</h2>
            <p>
              {{'missionMessage' | transloco}}
            </p>
          </div>

          <div class="item" fxFlex="1 1 48%" fxFlex.lt-md="1 1 100%">
            <h2 class="mat-h2">{{ "view" | transloco }}</h2>

            <p>
              {{'viewMessage' | transloco}}
            </p>
          </div>
        </div>
      </article>
    </div>

    </div>


  `,
  styles: [
    `
      .item {
        margin: 10px;
      }

      .green {
        color: white;
      }


    `
  ],
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
    this.color = "white";
    this.otherColor = "green";
  }
}
