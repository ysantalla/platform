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
  selector: 'app-interest',
  template: `

    <div class="container-news" fxLayout="row wrap" fxLayoutAlign="center center" [@FadeInOut]>
      <div class="item" fxFlex="1 1 100%" fxLayoutAlign="center center">
          <img width="66" src="./assets/img/icons/interest.png" />
          <h1 style="color: white; padding-top: 15px; display: inline; margin-left: 10px">{{"interest" | transloco}}</h1>
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
      <div class="new-item" fxFlex="1 1 100%">
        <h3>{{"error_news" | transloco}}</h3>
      </div>
    </div>

    <nav fxLayout="row wrap" *ngIf="!error"  fxLayoutAlign="center center" [@FadeInOut]>

      <div fxFlex="1 1 90%">
        <owl-carousel-o [options]="customOptions">

          <ng-template carouselSlide *ngFor="let item of lastNews$ | async; let i = index; let c = count;">

            <div fxFlex="1 2 33%" *ngFor="let n  of item" style="padding: 4%">
              <mat-card class="card">
                <div fxLayout="row wrap" fxLayoutAlign="center center">
                  <img mat-card-image fxFlex="1 1 60%" style="border-radius: 50%; margin-top: 3%"
                  [src]="n.imageThumbnailUrl" alt="Image">
                </div>
                <mat-card-header>

                  <mat-card-title>
                    <a style="color: #13632F; text-decoration: none;" target="_blank" [href]="n.link">
                      <h3>{{n.title}}</h3>
                    </a>
                  </mat-card-title>
                </mat-card-header>

                <mat-card-content>
                  <p style="text-align: justify;">
                    {{n.content}}
                  </p>
                </mat-card-content>
              </mat-card>
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

    img.mat-card-image {
      width: calc(100% + 32px);
    }

  `],
  animations: [FadeInOut]
})
export class InterestComponent implements OnInit {

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
    this.lastNews$ = this.newService.getInterest().pipe(
      catchError(err => {
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

