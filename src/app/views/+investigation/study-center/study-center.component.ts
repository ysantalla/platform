import { Component, OnInit } from '@angular/core';
import { FadeInOut } from '@app/core/animations/app.animation';

interface IStudyCenters {
  logo: string;
  name: string;
  link: string;
}

@Component({
  selector: 'app-study-center',
  templateUrl: './study-center.component.html',
  styleUrls: ['./study-center.component.scss'],
  animations: [FadeInOut]
})
export class StudyCenterComponent implements OnInit {

  data: IStudyCenters[];

  constructor() { }

  ngOnInit() {
    this.data = [
      {
        name: 'Centro de Estudios Forestales',
        link: 'http://cef.upr.edu.cu',
        logo: './assets/img/logos/CEF.png'
      },
      {
        name: 'Centro de Estudios de Ciencias de la Educación',
        link: 'http://cecepri.upr.edu.cu',
        logo: './assets/img/logos/CECEPRI.png'
      },
      {
        name: 'Centro de Estudios del Deporte y la Actividad Física',
        link: 'http://cedaf.upr.edu.cu',
        logo: './assets/img/logos/CEDAF.png'
      },
      {
        name: 'Centro de Estudios de Dirección, Desarrollo Local, Turismo y Cooperativismo',
        link: 'http://cegesta.upr.edu.cu',
        logo: './assets/img/logos/CEGESTA.png'
      },
      {
        name: 'Centro de Estudios de Medio Ambiente y Recursos Naturales',
        link: 'http://cemarna.upr.edu.cu',
        logo: './assets/img/logos/CEMARNA.png'
      },
    ];
  }

}
