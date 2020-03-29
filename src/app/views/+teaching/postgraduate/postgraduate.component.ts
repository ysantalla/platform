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
  selector: 'app-postgraduate',
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
        <h1 class="">{{ "postgraduate_service" | transloco }}</h1>
      </div>
    </div>

    <mat-divider style="margin: 0 3% 3%;"></mat-divider>

    <!-- Faculties -->
    <article
      [ngClass]="e ? 'gray' : 'white'"
      [@FadeInOut]
      *ngFor="let post of postgraduate; let i = index; let e = even"
    >
      <div class="container" fxLayout="row wrap" fxLayoutAlign="center center">
        <div *ngIf="e || (isHandset$ | async) === true; then first; else second"></div>

        <ng-template #first>
          <img
            fxFlex="1 1 49%"
            [@EnterLeft]
            fxFlex.lt-md="1 1 100%"
            [src]="post.logo"
            *ngIf="minScrollValue > i * numberScroll"
          />

          <div
            class="item mat-elevation-z8"
            [@EnterRight]
            fxFlex="1 1 39%"
            fxFlex.lt-md="1 1 100%"
            *ngIf="minScrollValue > i * numberScroll"
          >
              <ul style="list-style: none; padding-left: 8px;" role="list">
                <li style="margin-bottom: 15px;"
                  role="listitem" *ngFor="let course of post.courses">
                  <h1 class="mat-h1" style="margin: 0px;">{{ course.name }}</h1>
                  <h2 class="mat-h2" style="margin: 0px; color: white;">
                    {{ course.profesor.name }}
                  </h2>
                  <a [href]="'mailto://'+course.profesor.email" style="margin: 0px;">
                    {{ course.profesor.email }}
                  </a>
                </li>
              </ul>
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
            <ul style="list-style: none; padding-left: 8px;" role="list">
              <li style="margin-bottom: 15px;"
                role="listitem" *ngFor="let course of post.courses">
                <h1 class="mat-h1" style="margin: 0px;">{{ course.name }}</h1>
                <h2 class="mat-h2" style="margin: 0px; color: white;">
                  {{ course.profesor.name }}
                </h2>
                <a [href]="'mailto://'+course.profesor.email" style="margin: 0px;">
                  {{ course.profesor.email }}
                </a>
              </li>
            </ul>
          </div>
          <img
            fxFlex="1 1 49%"
            [@EnterRight]
            fxFlex.lt-md="1 1 100%"
            [src]="post.logo"
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
        padding-top: 1%;
        padding-bottom: 1%;
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
        padding: 10px;
        min-height: 200px;
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
export class PostgraduateComponent implements OnInit {
  minScrollValue = 20;
  numberScroll = 80;
  postgraduate: Postgraduate[] = [];

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
    this.postgraduate = [
      {
        logo: './assets/img/logos/CEGESTA.png',
        courses: [
          {
            name: 'Maestría en Administración de Empresas Agropecuarias (Exelencia)',
            profesor: {
              email: 'yamira@upr.edu.cu',
              name: 'Dr. C. Yamira Mirabal González'
            }
          },
          {
            name: 'Maestría en Dirección (Autorizada)',
            profesor: {
              email: 'tvargas@upr.edu.cu',
              name: 'Dr. C. Tania Vargas Fernández'
            }
          },
          {
            name: 'Doctorado en Ciencias Ecónomicas',
            profesor: {
              email: 'irolando@upr.edu.cu',
              name: 'Dr. C. Isidro R. Acuña Velázques'
            }
          }
        ],
      },
      {
        logo: './assets/img/logos/fcsh.png',
        courses: [
          {
            name: 'Maestría en Desarrollo Local (Calificada)',
            profesor: {
              email: 'leti79@upr.edu.cu',
              name: 'MSc. Leticia Yañez Pérez'
            }
          }
        ],
      },
      {
        logo: './assets/img/logos/fct.png',
        courses: [
          {
            name: 'Maestría en Informática Aplicada (Authorizada)',
            profesor: {
              email: 'raymari@upr.edu.cu',
              name: 'Dr. C. Raymari Reyes Chirino'
            }
          },
          {
            name: 'Maestría en Geología (Calificada)',
            profesor: {
              email: 'jlastra@upr.edu.cu',
              name: 'Dr. C. José Francisco Lastra Rivero'
            }
          },
          {
            name: 'Maestría en Eficiencia Energética (Calificada)',
            profesor: {
              email: 'luisl@upr.edu.cu',
              name: 'Dr. C. Luis Díaz Crespo'
            }
          },
          {
            name: 'Doctorado en Geología',
            profesor: {
              email: 'cenriques@upr.edu.cu',
              name: 'Dr. C. Carlos Enrique Cofiño Arada'
            }
          }
        ],
      },
      {
        logo: './assets/img/logos/CEDAF.png',
        courses: [
          {
            name: 'Maestría en Metodología para la Alta Competencia',
            profesor: {
              email: 'pedro.martinez@upr.edu.cu',
              name: 'Dr. C. Pedro A. Martínez Hernández'
            }
          }
        ],
      },
      {
        logo: './assets/img/logos/fcfa.png',
        courses: [
          {
            name: 'Maestría en Agroecología (Exelencia)',
            profesor: {
              email: 'mariol@upr.edu.cu',
              name: 'Dr. C. Mariol Morejon Garcia'
            }
          },
          {
            name: 'Doctorado en Ciencias Agrícolas (Autorizada)',
            profesor: {
              email: 'mariol@upr.edu.cu',
              name: 'Dr. C. Mariol Morejon Garcia'
            }
          }
        ],
      },
      {
        logo: './assets/img/logos/CEF.png',
        courses: [
          {
            name: 'Maestría en Ciencias Forestales (Exelencia)',
            profesor: {
              email: 'azaldivar@upr.edu.cu',
              name: 'Dr. C. Angel Zaldivar Solis'
            }
          },
          {
            name: 'Doctorado en Ciencias Forestales (Exelencia)',
            profesor: {
              email: 'avilam@upr.edu.cu',
              name: 'Dr. C. Magyuri Avila Martinez'
            }
          }
        ],
      },
      {
        logo: './assets/img/logos/CECEPRI.png',
        courses: [
          {
            name: 'Maestría en Ciencias de la Educación (Exelencia)',
            profesor: {
              email: 'juan.mena@upr.edu.cu',
              name: 'Dr. C. Juan A. Mena Lorenzo '
            }
          },
          {
            name: 'Doctorado en Ciencias de la Educación (Exelencia)',
            profesor: {
              email: 'mayra@upr.edu.cu',
              name: 'Dr. C. Mayra Ordaz Hernández'
            }
          }
        ],
      },
      {
        logo: './assets/img/logos/fem.png',
        courses: [
          {
            name: 'Maestría en Educación (Certificada)',
            profesor: {
              email: 'jcarlosl.fernandez@upr.edu.cu',
              name: 'Dr. C. Carlos Luis Fernandez Peña'
            }
          },
          {
            name: 'Doctorado en Educación (Autorizada)',
            profesor: {
              email: 'vadim.aguilar@upr.edu.cu',
              name: 'Dr. C. Vadim Aguilar Hernández'
            }
          }
        ],
      },
      {
        logo: './assets/img/logos/CEMARNA.png',
        courses: [
          {
            name: 'Maestría en Gestión Ambiental (Excelencia)',
            profesor: {
              email: 'maritza.linares@upr.edu.cu',
              name: 'Dr. C. Eliza Maritza Linares'
            }
          }
        ],
      }
    ];

  }
}
class Postgraduate {
  logo: string;
  courses: Course[];
}

class Course {
  name: string;
  profesor: Profesor;
}

class Profesor {
  name: string;
  email: string;
}

