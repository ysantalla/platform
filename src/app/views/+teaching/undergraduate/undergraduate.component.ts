import { Component, OnInit } from '@angular/core';
import {
  FadeInOut,
  EnterLeft,
  EnterRight
} from '@app/core/animations/app.animation';
import { ScrollService } from '@app/core/services/scroll.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-undergraduate',
  template: `
    <div fxLayout="row wrap" fxLayoutAlign="center center">
      <div
        style="padding-top: 10px;"
        fxFlex="1 1 90%"
        fxFlex.lt-md="1 1 90%"
        [@FadeInOut]
        fxLayout="row wrap"
        fxLayoutAlign="start center"
      >
        <h1 class="">{{ "full_career_service" | transloco }}</h1>
      </div>
    </div>



    <mat-divider style="margin: 0 3% 3%;"></mat-divider>

    <!-- Faculties -->
    <article
      [ngClass]="e ? 'gray' : 'white'"
      [@FadeInOut]
      *ngFor="let faculty of faculties; let i = index; let e = even"
    >
      <div class="container" fxLayout="row wrap" fxLayoutAlign="center center">
        <div *ngIf="e || (isHandset$ | async) === true; then first; else second"></div>

        <ng-template #first>
          <img
            fxFlex="1 1 49%"
            [@EnterLeft]
            fxFlex.lt-md="1 1 100%"
            [src]="faculty.logo"
            *ngIf="minScrollValue > i * numberScroll"
          />

          <div
            class="item mat-elevation-z8"
            [@EnterRight]
            fxFlex="1 1 39%"
            fxFlex.lt-md="1 1 100%"
            *ngIf="minScrollValue > i * numberScroll"
          >
            <h1 class="mat-h1">{{ "careers" | transloco }}</h1>
            <mat-list role="list">
              <mat-list role="list">
                <mat-list-item
                  role="listitem"
                  *ngFor="let carrer of faculty.careers"
                  ><p class="carer">
                    {{ carrer.name }}
                  </p></mat-list-item
                >
              </mat-list>
            </mat-list>
          </div>
        </ng-template>

        <ng-template #second>
          <div
            class="item mat-elevation-z8"
            [@EnterLeft]
            fxFlex="1 1 39%"
            fxFlex.lt-md="1 1 100%"
            *ngIf="minScrollValue > i * numberScroll"
          >
            <h1 class="mat-h1">{{ "careers" | transloco }}</h1>
            <mat-list role="list">
              <mat-list role="list">
                <mat-list-item
                  role="listitem"
                  *ngFor="let carrer of faculty.careers"
                  ><p class="carer">
                    {{ carrer.name }}
                  </p></mat-list-item
                >
              </mat-list>
            </mat-list>
          </div>
          <img
            fxFlex="1 1 49%"
            [@EnterRight]
            fxFlex.lt-md="1 1 100%"
            [src]="faculty.logo"
            *ngIf="minScrollValue > i * numberScroll"
          />
        </ng-template>
      </div>
    </article>
  `,
  styles: [
    `
      article {
        background-color: "#fff";
        padding-top: 3%;
        padding-bottom: 3%;
      }

      .gray {
        background-color: "#fff";
      }

      .white {
        background-color: "#fff";
      }

      .item {
        background-color: #348b53;
        color: white;
        padding: 30px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
      }

      p.carer,
      h1.mat-h1 {
        color: white;
      }
    `
  ],
  animations: [FadeInOut, EnterLeft, EnterRight]
})
export class UndergraduateComponent implements OnInit {
  minScrollValue = 20;
  numberScroll = 180;
  faculties: Faculty[] = [];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => {
        if (result.matches) {
          this.numberScroll = 130;
        }
        return result.matches;
      })
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private scrollService: ScrollService) {
    this.scrollService.onScrolledDown$.subscribe(
      data => {
        if (data.scrollTop > this.minScrollValue) {
          this.minScrollValue = data.scrollTop;
        }
      },
      error => {
        this.minScrollValue = 0;
      }
    );
  }

  ngOnInit() {
    this.faculties = [
      {
        logo: './assets/img/logos/fem.png',
        careers: [
          { name: 'Licenciatura en Educación Marxismo Leninismo e Historia' },
          { name: 'Licenciatura en Educación Biología Geología' },
          { name: 'Licenciatura en Educación Biología Química' },
          { name: 'Licenciatura en Educación Laboral' },
          { name: 'Licenciatura en Educación Biología' },
          { name: 'Licenciatura en Educación Geografía' },
          { name: 'Licenciatura en Educación Química' },
          { name: 'Licenciatura en Educación Matemática' },
          { name: 'Licenciatura en Educación Física' }
        ]
      },
      {
        logo: './assets/img/logos/fei.png',
        careers: [
          { name: 'Licenciatura en Educación Primaria (Certificada)' },
          { name: 'Licenciatura en Educación Especial (Certificada)' },
          { name: 'Licenciatura en Educación Preescolar (Certificada)' },
          { name: 'Licenciatura en Educación Logopedia (Certificada)' },
          { name: 'Licenciatura en Pedagogía- Psicología (Certificada)' },
          { name: 'Instructores de Arte' }
        ]
      },
      {
        logo: './assets/img/logos/fcee.png',
        careers: [
          { name: 'Ingeniería Industrial' },
          { name: 'Licenciatura en Economía (Excelencia)' },
          { name: 'Licenciatura en Contabilidad y Finanzas (Certificada)' },
          { name: 'Licenciatura en Educación Economía' }
        ]
      },
      {
        logo: './assets/img/logos/fcf.png',
        careers: [{ name: 'Licenciatura en Cultura Física (Certificada)' }]
      },
      {
        logo: './assets/img/logos/fct.png',
        careers: [
          { name: 'Ingeniería Mecánica (Certificada)' },
          {
            name: 'Ingeniería en Telecomunicaciones y Electrónica (Certificada)'
          },
          { name: 'Ingeniería Informática (Certificada)' },
          { name: 'Ingeniería Geológica (Certificada)' },
          { name: 'Licenciatura en Educación Eléctrica' },
          { name: 'Licenciatura en Educación Construcción' },
          { name: 'Licenciatura en Educación Laboral e Informática' },
          { name: 'Licenciatura en Educación Laboral' },
          { name: 'Licenciatura en Educación Informática' }
        ]
      },
      {
        logo: './assets/img/logos/fcfa.png',
        careers: [
          { name: 'Ingeniería Forestal (Excelencia)' },
          { name: 'Ingeniería en Agronomía (Excelencia)' },
          { name: 'Agronomía de Montaña (Avalada)' },
          { name: 'Licenciatura en Educación Agropecuaria' }
        ]
      },
      {
        logo: './assets/img/logos/fcsh.png',
        careers: [
          { name: 'Licenciatura en Derecho' },
          { name: 'Licenciatura en Gestión Sociocultural para el Desarrollo' },
          { name: 'Licenciatura en Educación Lenguas Extranjeras' }
        ]
      }
    ];

  }
}

class Faculty {
  logo: string;
  careers: Career[];
}

class Career {
  name: string;
}
