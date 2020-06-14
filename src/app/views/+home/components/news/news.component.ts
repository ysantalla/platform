import { Component, OnInit, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
import { FadeInOut } from '@app/core/animations/app.animation';
import { MatSnackBar } from '@angular/material';
import { TranslocoService } from '@ngneat/transloco';
import { News } from '@app/core/models/new.model';
import { NewsService } from '@app/core/services/news.service';

@Component({
  selector: 'app-news',
  template: `
    <article [ngClass]="color">
      <div class="container-news" fxLayout="row wrap" fxLayoutAlign="center center" [@FadeInOut]>
        <div class="item" fxFlex="1 1 90%" fxLayoutAlign="center center">
          <img width="60" src="./assets/img/icons/news.png" />
          <h1 style="padding-top: 15px; display: inline; margin-left: 10px">{{"news" | transloco}}</h1>

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

      <div class="container-news" *ngIf="!error" fxLayout="row wrap" fxLayoutAlign="center center" [@FadeInOut]>
          <div fxLayout="row wrap" fxFlex="1 1 91%" fxFlex.lt-md="1 1 100%" fxLayout.lt-md="column wrap"
            fxLayoutAlign="center start" fxLayoutAlign.lt-md="center center">

            <div *ngFor="let n of lastNews$ | async" class="item" fxFlex="1 1 45%" style="margin: 2%"
              fxFlex.lt-md="1 1 100%" fxLayoutAlign="start start">
              <div class="new-item" fxFlex="1 1 100%">
                <app-window class="green window" [imageUrl]="n.imageMediumUrl"></app-window>
                <a style="text-decoration: none;" [href]="n.link" target="_blank">
                  <h3 style="margin-left: 10px; margin-top: 20px">{{n.title}}</h3>
                </a>
              </div>
            </div>
        </div>
      </div>
    </article>
  `,
  styles: [`
    .container-news {
      padding: 0px 20px 20px 20px;
    }

    .item {
      padding-left: 10px;
      padding-right: 10px;
    }

  `],
  animations: [FadeInOut]
})
export class NewsComponent implements OnInit {

  lastNews$: Observable<News[]>;
  @Input() color: string;
  error = false;
  loading = false;

  constructor(
    private newService: NewsService,
    private snackBar: MatSnackBar,
    private translocoService: TranslocoService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.lastNews$ = this.newService.getLastNews().pipe(
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
