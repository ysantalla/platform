import { Component, OnInit } from '@angular/core';
import { FadeInOut } from '@app/core/animations/app.animation';

interface IExtension {
  type: string;
  list: string[];
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  animations: [FadeInOut]
})
export class IndexComponent implements OnInit {

  data: IExtension[];

  constructor() {}

  ngOnInit() {
    this.data = [
      {
        type: 'Cultura',
        list: [
          'Programas de Salud (prevención de enfermedades de transmisión sexual/ VIH/ SIDA; tuberculosis; violencia de género; promoción de hábitos saludables de vida, entre otros)',
          'Programa de Promoción de Lectura.',
          'Revitalización del Programa del Audiovisual.',
          'Programa de Patrimonio Cultural Universitario.',
          'Atención a las Cátedras Universitarias del Adulto Mayor (CUAM)',
          'Cátedra Honorífica de Los Hermanos Saíz.',
          'Programa de Matutinos, Actos y Eventos.',
          'Cursos extensionistas.',
          'Asesoramiento de cursos extensionistas, escuelas de verano, campamentos de verano, plan vacacional, etc.'
        ]
      },
      {
        type: 'Proyectos',
        list: [
          'Proyecto Extensionista: “Rescate de la memoria histórica y la identidad pinareña”.',
          'Proyecto Sociocultural: “Literatura artística en la Universidad y la Comunidad”.',
          'Proyecto de Investigación: Saludarte: Estrategia para la promoción y educación de la salud.',
        ]
      }
    ];
  }

}
