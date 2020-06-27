import { Component, OnInit } from '@angular/core';
import { FadeInOut } from '@app/core/animations/app.animation';


@Component({
  selector: 'app-undergraduate',
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
          <h1>{{ "full_career_service" | transloco }}</h1>
        </div>

        <mat-divider fxFlex="1 1 100%"></mat-divider>

        <!-- Faculties -->
        <article
          style="padding-top: 2%; padding-bottom: 2%;"
          [@FadeInOut]
          *ngFor="let faculty of faculties"
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
            >
              <div fxFlex="1 1 50%"
                [@FadeInOut]
                fxFlex.lt-md="1 1 100%">
                <img fxFlex="1 1 100%" [src]="faculty.logo"/>
              </div>

              <div fxFlex="1 1 50%" [@FadeInOut] fxFlex.lt-md="1 1 100%">
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
    `,
  ],
  animations: [FadeInOut],
})
export class UndergraduateComponent implements OnInit {

  faculties: Faculty[] = [];

  constructor() {}

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
          { name: 'Licenciatura en Educación Física' },
        ],
      },
      {
        logo: './assets/img/logos/fei.png',
        careers: [
          { name: 'Licenciatura en Educación Primaria (Certificada)' },
          { name: 'Licenciatura en Educación Especial (Certificada)' },
          { name: 'Licenciatura en Educación Preescolar (Certificada)' },
          { name: 'Licenciatura en Educación Logopedia (Certificada)' },
          { name: 'Licenciatura en Pedagogía- Psicología (Certificada)' },
          { name: 'Instructores de Arte' },
        ],
      },
      {
        logo: './assets/img/logos/fcee.png',
        careers: [
          { name: 'Ingeniería Industrial' },
          { name: 'Licenciatura en Economía (Excelencia)' },
          { name: 'Licenciatura en Contabilidad y Finanzas (Certificada)' },
          { name: 'Licenciatura en Educación Economía' },
        ],
      },
      {
        logo: './assets/img/logos/fcf.png',
        careers: [{ name: 'Licenciatura en Cultura Física (Certificada)' }],
      },
      {
        logo: './assets/img/logos/fct.png',
        careers: [
          { name: 'Ingeniería Mecánica (Certificada)' },
          {
            name:
              'Ingeniería en Telecomunicaciones y Electrónica (Certificada)',
          },
          { name: 'Ingeniería Informática (Certificada)' },
          { name: 'Ingeniería Geológica (Certificada)' },
          { name: 'Licenciatura en Educación Eléctrica' },
          { name: 'Licenciatura en Educación Construcción' },
          { name: 'Licenciatura en Educación Laboral e Informática' },
          { name: 'Licenciatura en Educación Laboral' },
          { name: 'Licenciatura en Educación Informática' },
        ],
      },
      {
        logo: './assets/img/logos/fcfa.png',
        careers: [
          { name: 'Ingeniería Forestal (Excelencia)' },
          { name: 'Ingeniería en Agronomía (Excelencia)' },
          { name: 'Agronomía de Montaña (Avalada)' },
          { name: 'Licenciatura en Educación Agropecuaria' },
        ],
      },
      {
        logo: './assets/img/logos/fcsh.png',
        careers: [
          { name: 'Licenciatura en Derecho' },
          { name: 'Licenciatura en Gestión Sociocultural para el Desarrollo' },
          { name: 'Licenciatura en Educación Lenguas Extranjeras' },
        ],
      },
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
