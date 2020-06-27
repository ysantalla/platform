import { Component, OnInit } from '@angular/core';
import {
  FadeInOut
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
        fxLayout="row wrap"
        fxFlex="1 1 83%"
        fxFlex.lt-md="1 1 100%"
        fxLayoutAlign="center center"
      >
        <div
          fxFlex="1 1 100%"
          fxFlex.lt-md="1 1 100%"
          fxLayout="row wrap"
          fxLayoutAlign="center center"
          [@FadeInOut]
        >
          <h1>{{ "postgraduate_service" | transloco }}</h1>
        </div>

        <mat-divider fxFlex="1 1 100%"></mat-divider>

        <!-- Faculties -->
        <article
          style="padding-top: 2%; padding-bottom: 2%;"
          [@FadeInOut]
          *ngFor="let post of postgraduate;"
        >
          <div
            class="container"
            fxLayout="row wrap"
            fxLayoutAlign="center center"
          >
            <div
              class="item mat-elevation-z1"
              [@FadeInOut]
              fxFlex="1 1 100%"
              fxFlex.lt-md="1 1 100%"
              fxLayout="row wrap"
              fxLayoutAlign="start start"
            >
              <div fxFlex="1 1 50%"
                [@FadeInOut]
                fxFlex.lt-md="1 1 100%">
                <img fxFlex="1 1 100%" [src]="post.logo"/>
              </div>

              <div fxFlex="1 1 50%" [@FadeInOut] fxFlex.lt-md="1 1 100%">
                <ul style="list-style: none; padding-left: 8px;" role="list">
                  <li style="margin-bottom: 15px;"
                    role="listitem" *ngFor="let course of post.courses">
                    <h1 class="mat-h1" style="margin: 0px;">{{ course.name }}</h1>
                    <h2 class="mat-h2" style="margin: 0px;">
                      {{ course.profesor.name }}
                    </h2>
                    <a [href]="'mailto://'+course.profesor.email" style="margin: 0px;">
                      {{ course.profesor.email }}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  `,
  styles: [
    `.item {
      padding: 30px;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      min-height: 350px;
    }
  `
  ],
  animations: [FadeInOut]
})
export class PostgraduateComponent implements OnInit {

  postgraduate: Postgraduate[] = [];

  constructor() {

  }

  ngOnInit() {
    this.postgraduate = [
      {
        logo: './assets/img/logos/CECEPRI.png',
        courses: [
          {
            name: 'Maestría en Ciencias de la Educación (Exelencia)',
            profesor: {
              email: 'juan.mena@upr.edu.cu',
              name: 'Dr.C. Juan A. Mena Lorenzo '
            }
          },
          {
            name: 'Doctorado en Ciencias de la Educación (Exelencia)',
            profesor: {
              email: 'mayra@upr.edu.cu',
              name: 'Dr.C. Mayra Ordaz Hernández'
            }
          }
        ],
      },
      {
        logo: './assets/img/logos/CEEDAR.png',
        courses: [
          {
            name: 'Maestría en Metodología del Entrenamiento Deportivo para la Alta Competencia',
            profesor: {
              email: 'pedro.martinez@upr.edu.cu',
              name: 'Dr.C. Pedro A. Martínez Hernández'
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
              name: 'Dr.C. Angel Zaldivar Solis'
            }
          },
          {
            name: 'Doctorado en Ciencias Forestales (Exelencia)',
            profesor: {
              email: 'daniel@upr.edu.cu',
              name: 'Dr.C. Daniel Álvarez Lazo'
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
              name: 'Dr.C. Eliza Maritza Linares Guerra'
            }
          }
        ],
      },
      {
        logo: './assets/img/logos/CEGESTA.png',
        courses: [
          {
            name: 'Maestría en Administración de Empresas Agropecuarias (Exelencia)',
            profesor: {
              email: 'yamira@upr.edu.cu',
              name: 'Dr.C. Yamira Mirabal González'
            }
          },
          {
            name: 'Maestría en Dirección (Autorizada)',
            profesor: {
              email: 'tvargas@upr.edu.cu',
              name: 'Dr.C. Tania Vargas Fernández'
            }
          },
          {
            name: 'Doctorado en Ciencias Ecónomicas',
            profesor: {
              email: 'marin@upr.edu.cu',
              name: 'Dr. C. Luis Gustavo Marín Cuba'
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
              name: 'Dr.C. Carlos Luis Fernandez Peña'
            }
          },
          {
            name: 'Doctorado en Educación (Autorizada)',
            profesor: {
              email: 'vadim.aguilar@upr.edu.cu',
              name: 'Dr.C. Vadim Aguilar Hernández'
            }
          }
        ],
      },
      {
        logo: './assets/img/logos/fcfa.png',
        courses: [
          {
            name: 'Maestría en Agroecología y Agricultura Sostenible (Exelencia)',
            profesor: {
              email: 'mariol@upr.edu.cu',
              name: 'Dr.C. Mariol Morejon Garcia'
            }
          },
          {
            name: 'Doctorado en Ciencias Agrícolas (Autorizada)',
            profesor: {
              email: 'mariol@upr.edu.cu',
              name: 'Dr.C. Mariol Morejon Garcia'
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
              name: 'Dr.C. Raymari Reyes Chirino'
            }
          },
          {
            name: 'Maestría en Geología (Calificada)',
            profesor: {
              email: 'jlastra@upr.edu.cu',
              name: 'Dr.C. José Francisco Lastra Rivero'
            }
          },
          {
            name: 'Maestría en Eficiencia Energética (Calificada)',
            profesor: {
              email: 'luisl@upr.edu.cu',
              name: 'MSc. Luis Díaz Crespo'
            }
          },
          {
            name: 'Doctorado en Geología',
            profesor: {
              email: 'rebeca@upr.edu.cu',
              name: 'Dr.C. Rebeca Hernández Díaz'
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

