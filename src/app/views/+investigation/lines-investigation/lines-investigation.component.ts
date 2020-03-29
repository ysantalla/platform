import { Component, OnInit } from '@angular/core';
import { FadeInOut } from '@app/core/animations/app.animation';

interface IInvestigationLines {
  name: string;
  coordinator: {
    name: string;
    grade: string;
    email: string;
  };
}

@Component({
  selector: 'app-lines-investigation',
  templateUrl: './lines-investigation.component.html',
  styleUrls: ['./lines-investigation.component.scss'],
  animations: [FadeInOut]
})
export class LinesInvestigationComponent implements OnInit {

  lines: IInvestigationLines[];

  constructor() { }

  ngOnInit() {

    this.lines = [
      {
        name: 'Gestión del desarrollo local sostenible',
        coordinator: {
          email: 'carlosc@upr.edu.cu',
          grade: 'Dr. C. ',
          name: 'Carlos Cesar Torres Páez'
        }
      },
      {
        name: 'Gestión de empresas cooperativas',
        coordinator: {
          email: 'yamira@upr.edu.cu',
          grade: 'Dr. C. ',
          name: 'Yamira Mirabal Gonzalez'
        }
      },
      {
        name: 'Atención a la diversidad en la educación infantil',
        coordinator: {
          email: 'grechin@upr.edu.cu',
          grade: 'Dr. C. ',
          name: 'Grechin '
        }
      },
      {
        name: 'Desarrollo social y cultural',
        coordinator: {
          email: 'belky1976@upr.edu.cu',
          grade: 'Dr. C. ',
          name: 'Belkys Rojas Hernandez'
        }
      },
      {
        name: 'Gestión integral de los procesos de formación de los profesionales',
        coordinator: {
          email: 'taimi.breijo@upr.edu.cu',
          grade: 'Dr. C. ',
          name: 'Taymi Breijo Worosz'
        }
      },
      {
        name: 'Rendimiento y desarrollo sostenible en el deporte',
        coordinator: {
          email: 'carlos.alberto@upr.edu.cu',
          grade: 'Dr. C. ',
          name: 'Carlos Alberto Martinez'
        }
      },
      {
        name: 'Gestión de la Educación ambiental',
        coordinator: {
          email: 'doralilia@upr.edu.cu',
          grade: 'Dr. C. ',
          name: 'Doralilia Marquez'
        }
      },
      {
        name: 'Gestión agrícola sostenible',
        coordinator: {
          email: 'mariol@upr.edu.cu',
          grade: 'Dr. C. ',
          name: 'Mariol Morejón García'
        }
      },
      {
        name: 'Gestión del desarrollo forestal sostenible',
        coordinator: {
          email: 'azaldivar@upr.edu.cu',
          grade: 'Dr. C. ',
          name: 'Angel Zaldivar Solis'
        }
      },
      {
        name: 'Contextualización del proceso educativo en la  enseñanza general media',
        coordinator: {
          email: 'carlos.luis@upr.edu.cu',
          grade: 'Dr. C. ',
          name: 'Carlos Luis Fdez'
        }
      }
    ];

  }

}
