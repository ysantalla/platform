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

interface Faculty {
  logo: string;
  careers: Career[];
}

interface Career {
  name: string;
}

interface Students {
  tipo: string;
  message: string;
  required: string[];
}

@Component({
  selector: 'app-enrollment',
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
        <h1 class="">{{ "enrollment" | transloco }}</h1>
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
            fxFlex="1 1 30%"
            [@EnterLeft]
            fxFlex.lt-md="1 1 100%"
            [src]="faculty.logo"
            *ngIf="minScrollValue > i * numberScroll"
          />

          <div
            class="item mat-elevation-z8"
            [@EnterRight]
            fxFlex="1 1 60%"
            fxFlex.lt-md="1 1 90%"
            *ngIf="minScrollValue > i * numberScroll"
          >
            <h1 class="mat-h1">¿Por qué estudiar en la Universidad de Pinar del Río?</h1>
            <ul style="list-style: none;">
              <li
                *ngFor="let carrer of faculty.careers"
                >
                <h4 class="mat-h4" style="color: white;">
                  {{ carrer.name }}
</h4>
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
            <h1 class="mat-h1">{{ "careers" | transloco }}</h1>
              <ul style="list-style: none;">
                <li *ngFor="let carrer of faculty.careers">
                  <h4 class="mat-h4" style="color: white;">
                    {{ carrer.name }}
                  </h4>
                </li>
              </ul>
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

    <mat-divider style="margin: 0 3% 3%;"></mat-divider>

    <div fxLayout="row wrap" fxLayoutAlign="center center">
      <div
        style="padding-top: 10px;"
        fxFlex="1 1 90%"
        fxFlex.lt-md="1 1 90%"
        [@FadeInOut]
        fxLayout="row wrap"
        fxLayoutAlign="start center"
      >
        <h1 class="">Aspirantes</h1>

        <p class="">Los programas académicos pertenecen a diferentes modalidades de estudio tales como cursos regulares diurnos, cursos por encuentros, educación a distancia y cursos de ciclo corto. Para ingresar a nuestra universidad es importante conocer los requisitos necesarios.</p>
      </div>
    </div>

    <article
      [@FadeInOut]
    >
      <div class="container" fxLayout="row wrap" fxLayoutAlign="center start">
        <div class="item mat-elevation-z8" fxFlex="1 1 45%" fxFlex.lt-md="1 1 90%" [@FadeInOut] fxLayout="row wrap" fxLayoutAlign="start center" >
           <h1 class="mat-h1" style="color: white">{{studentN.tipo}}</h1>
           <h2 class="mat-h2" style="color: white">{{studentN.message}}</h2>
            <ul style="list-style: none;">
              <li *ngFor="let item of studentN.required">
                <p style="color: white;">
                  {{ item }}
                </p>
               </li>
            </ul>
        </div>

        <div class="item mat-elevation-z8" fxFlex="1 1 45%" fxFlex.lt-md="1 1 90%" [@FadeInOut] fxLayout="row wrap" fxLayoutAlign="start center" >
           <h1 class="mat-h1" style="color: white">{{studentE.tipo}}</h1>
           <h2 class="mat-h2" style="color: white">{{studentE.message}}</h2>
            <ul style="list-style: none;">
              <li *ngFor="let item of studentE.required">
                <p style="color: white;">
                  {{ item }}
                </p>
               </li>
            </ul>
        </div>
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
        padding: 25px;
        margin-top: 10px;
        margin-left: 10px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
      }
      p.carer,
      h1.mat-h1 {
        color: white;
      }

      h2.mat-h2 {
        margin-bottom: 0px;
      }

      ul {
        margin-top: 0px;
      }
    `
  ],
  animations: [FadeInOut, EnterLeft, EnterRight]
})
export class EnrollmentComponent implements OnInit {
  minScrollValue = 20;
  numberScroll = 180;
  faculties: Faculty[] = [];

  studentN: Students;
  studentE: Students;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
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
    private scrollService: ScrollService
  ) {
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
        logo: './assets/img/logos/logo-green.png',
        careers: [
          {
            name:
              'Posee un entorno que ofrece una cálida bienvenida y una estancia segura.'
          },
          {
            name:
              'Se caracteriza po la excelencia académica de los programas de grado y postgrado.'
          },
          {
            name:
              'Ostenta un personal docente-investigador disponible, compentent y de reconocido prestigio internacional que brinda una asesoría especializada para el desarrollo de tu investigación de grado y/o postgrado.'
          }
        ]
      }
    ];

    this.studentN = {
      tipo: 'Para estudiantes nacionales',
      message:
        'En el momento de la matrícula debe presentar la siguiente documentación:',
      required: [
        'Carné de Identidad (actualizado y en buen estado)',
        'Original y fotocopia del título del nivel escolar anterior o certificación de estudios terminados.',
        'Los varones que ingresen al curso diurno deben acreditar su situación con respecto al cumplimiento del Servicio Militar Activo (SMA) presentando: el original de la  boleta de licenciado del Servicio Militar que expide la unidad militar (si fue declarado apto FAR) o el original del modelo SIES-4 de la evaluación del cumplimiento de la tarea socialmente útil, acuñada por la Comisión de Ingreso Provincial junto al anexo 1  con sello 5 pesos que expide el Comité Militar Municipal (si fue declarado apto con recomendaciones médicas o no apto FAR).'
      ]
    };

    this.studentE = {
      tipo: 'Para estudiantes extranjeros',
      message:
        'De acuerdo con las disposiciones legales aprobadas por el Ministerio de Educación Superior (MES) de Cuba:',
      required: [
        'Los ciudadanos extranjeros residentes permanentes en el territorio nacional podrán ingresar a nuestra Universidad según los mismos requisitos vigentes para los cubanos.',
        'Los ciudadanos extranjeros que deseen matricular una carrera universitaria como estudiantes autofinanciados deben solicitar a la Dirección de Ingreso y Ubicación Laboral del MES el autorizo de matrícula.',
        'En los casos que sean financiados por un gobierno, la embajada de su país presenta la solicitud al Departamento de Exportaciones o Servicios Académicos del MES.',
        'Los que sean aprobados recibirán la respuesta por esa misma vía y  para matricular deberán presentar los siguientes documentos debidamente legalizados por las oficinas consulares de Cuba en el exterior: Título de graduado de preuniversitario, bachillerato o nivel equivalente y el certificado de notas, para poder realizar  la homologación con el nivel de bachiller en Cuba como requisito para cursar  estudios universitarios. Certificado de salud debidamente legalizado que incluya la declaración de que no porta enfermedades transmisibles así como impedimentos físicos o mentales invalidantes para el ejercicio de la profesión a que aspira. Documento que certifique que no posee antecedentes penales. Certificación de Nacimiento. Los ciudadanos extranjeros no hispanohablantes deben demostrar su dominio del idioma español.',
        'De no cumplirse este requisito, el aspirante debe matricular la etapa preparatoria (en la propia universidad) antes de iniciar el primer año de la carrera.'
      ]
    };
  }
}
