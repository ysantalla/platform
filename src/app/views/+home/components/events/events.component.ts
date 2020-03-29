import { Component, OnInit, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
import { FadeInOut } from '@app/core/animations/app.animation';
import { MatSnackBar } from '@angular/material';
import { TranslocoService } from '@ngneat/transloco';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { News } from '@app/core/models/new.model';
import { NewsService } from '@app/core/services/news.service';

@Component({
  selector: 'app-events',
  template: `

    <div class="container-news" fxLayout="row wrap" fxLayoutAlign="center center" [@FadeInOut]>
      <div class="item" fxFlex="1 1 100%" fxLayoutAlign="center center">
          <img width="60" src="./assets/img/icons/events.png" />
          <h1 style="color: white; padding-top: 15px; display: inline; margin-left: 10px">{{"events" | transloco}}</h1>
      </div>
    </div>

    <mat-toolbar *ngIf="loading">
      <mat-toolbar-row>
        <mat-progress-bar
          color="primary">
        </mat-progress-bar>
      </mat-toolbar-row>
    </mat-toolbar>

    <div class="error-message" *ngIf="error" fxLayout="row wrap" fxLayout.lt-md="column wrap"
      fxLayoutAlign="center center" fxLayoutAlign.lt-md="center center" [@FadeInOut]>
      <div class="new-item" fxFlex="1 1 90%">
        <h3>{{"error_news" | transloco}}</h3>
      </div>
    </div>

    <nav fxLayout="row wrap" *ngIf="!error"  fxLayoutAlign="center center" [@FadeInOut]>

      <div fxFlex="1 1 100%">
        <owl-carousel-o [options]="customOptions">
          <ng-template carouselSlide *ngFor="let n of lastNews$ | async">
            <div class="container-numbers" fxLayout="row wrap" fxLayoutAlign="center center">

              <div class="item" fxFlex="1 1 49%" fxFlex.lt-md="1 1 100%" fxLayout="row wrap"
                fxLayoutAlign="center start">
                <div style="padding-bottom: 100px;">
                  <h2 style="color: white;">{{n.title}}</h2>
                  <p style="color: white;">{{n.content}}</p>

                  <a mat-button [href]="n.link" target="_blank">
                    <button style="text-transform: uppercase; color: white; background-color: black;" mat-raised-button>
                    <span>{{ "read" | transloco }}</span>
                  </button></a>
                  <br />
                </div>

              </div>

              <div class="item" style="margin-left: 20px;" fxFlex="1 1 49%" fxFlex.lt-md="1 1 100%">
                <app-window [imageUrl]="n.imageMediumUrl"></app-window>
              </div>
            </div>
          </ng-template>

        </owl-carousel-o>
      </div>
    </nav>
  `,
  styles: [`
    .container-news {
      padding: 0px 30px 30px 30px;
    }
  `],
  animations: [FadeInOut]
})
export class EventsComponent implements OnInit {

  lastNews$: Observable<News[]>;
  @Input() color: string;
  error = false;
  loading = false;

  customOptions: OwlOptions = {
    loop: true,
    dots: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      }
    },
    nav: false,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 1000
  };

  constructor(
    private newService: NewsService,
    private snackBar: MatSnackBar,
    private translocoService: TranslocoService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.lastNews$ = this.newService.getEvents().pipe(
      catchError(err => {
        console.log(err)
        this.error = true;

        this.snackBar.open(this.translocoService.translate('error_news'), 'X', {duration: 3000});
        return of([]);
      }),
      finalize(() => {
        this.loading = false;
      })
    );
  }

}
