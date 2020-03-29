import { Component, OnInit } from '@angular/core';
import { FadeInOut } from '@app/core/animations/app.animation';

interface IServices {
  type: string;
  list: {
    name: string;
    link: string;
  }[];
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  animations: [FadeInOut]
})
export class IndexComponent implements OnInit {

  data: IServices[];

  constructor() {}

  ngOnInit() {

    this.data = [
      {
        type: 'UPRedes',
        list: [
          {
            name: 'Correo Profesores',
            link: 'https://correo.upr.edu.cu'
          },
          {
            name: 'Correo Estudiantes',
            link: 'https://estudiantes.upr.edu.cu'
          },
          {
            name: 'Proxy Go',
            link: 'https://proxy-go.upr.edu.cu'
          },
        ]
      },
      {
        type: 'CRAI',
        list: [
          {
            name: 'Centro de Recursos para el Aprendizaje y la Investigación',
            link: 'https://crai.upr.edu.cu/'
          }
        ]
      }
    ];
  }

}
