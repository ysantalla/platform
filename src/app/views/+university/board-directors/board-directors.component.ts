import { Component, OnInit } from '@angular/core';
import { SyncService } from '../services/sync.service';
import { Observable, of } from 'rxjs';
import { finalize, catchError } from 'rxjs/operators';

import {environment as env} from '@env/environment';
import { trigger, state, style, transition, animate } from '@angular/animations';

interface CD {
  nombre: string;
  cargo: string;
  telefono: string;
  foto?: string;
}

@Component({
  selector: 'app-board-directors',
  templateUrl: './board-directors.component.html',
  styleUrls: ['./board-directors.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state(
        'void',
        style({
          opacity: 0
        })
      ),
      transition('void <=> *', animate(1000))
    ])
  ]
})
export class BoardDirectorsComponent implements OnInit {

  data$: Observable<any[]>;
  error = false;

  url = `${env.syncURL}/user/`;

  cd: CD[] = [];

  constructor(
    private syncService: SyncService
  ) { }

  ngOnInit() {

    this.cd = [
      {
        nombre: 'Dr.C. Yorki Mayor Hernández',
        cargo: 'Rector',
        telefono: '(53) 48 779348/ (53) 48 777923',
        foto: 'Yorki.jpeg'
      },
      {
        nombre: 'Dr.C. Mario Luis Gómez Ivizate',
        cargo: 'Vicerrector Primero',
        telefono: '(53) 48 728623',
        foto: 'Mario.jpeg'
      },
      {
        nombre: 'Dr.C. Saray Nuñez González',
        cargo: 'Vicerrector de Investigación, Informatización y Postgrado',
        telefono: '(53) 48 728622',
        foto: 'Zaray.jpeg'
      },
      {
        nombre: 'Dr.C. María Cristina Salabarría Márquez',
        cargo: 'Vicerrector de Extensión Universitaria y Relaciones Internacionales',
        telefono: '(53) 48 779349',
        foto: 'Cristina.jpeg'
      },
      {
        nombre: 'MSc. Reinier González Garrido',
        cargo: 'Director General de Administración y Servicios',
        telefono: '(53) 48728624/ (53) 48 753009',
        foto: 'Reinier.jpeg'
      },
      {
        nombre: 'MSc. Yosvany Barrios Hernández',
        cargo: 'Director General de Economía y Recursos Humanos',
        telefono: '(53) 48 759728',
        foto: 'Yosvani.jpeg'
      },
      {
        nombre: 'Dr.C. Luís Wilfredo Martínez Becerra',
        cargo: 'Decano Facultad de Ciencias Forestales y Agropecuarias',
        telefono: '(53) 48 775452',
        foto: 'Wilfredo.jpeg'
      },
      {
        nombre: 'Dr.C. Dianelkys Martínez Rodríguez',
        cargo: 'Decano Facultad de Ciencias Sociales y Humanidades',
        telefono: '(53) 48 779358',
        foto: 'Dianelkys.jpeg'
      },
      {
        nombre: 'Dr.C Roberto Barrera Jiménez',
        cargo: 'Decano Facultad de Ciencias Técnicas',
        telefono: '(53) 48 755453',
        foto: 'Robe.jpeg'
      },
      {
        nombre: 'Dr.C. Jose Almeida Cordero Mederos',
        cargo: 'Decano Facultad de Ciencias Económicas y Empresariales',
        telefono: '(53) 48 754289',
        foto: 'Jose.jpeg'
      },
      {
        nombre: 'DrC. Julio Antonio Conill Armenteros',
        cargo: 'Decano Facultad de Educación Infantil',
        telefono: '(53) 48 785102',
        foto: 'Conil.jpeg'
      },
      {
        nombre: 'Dr.C. Roberto Isbel Morejón Quintana',
        cargo: 'Decano Facultad de Educación Media',
        telefono: '(53) 48 767310',
        foto: 'Roberto.jpeg'
      },
      {
        nombre: 'MSc. Yadira Pérez Díaz',
        cargo: 'Decana Facultad de Cultura Física',
        telefono: '(53) 48 728254',
        foto: 'Yadira.jpeg'
      },
      {
        nombre: 'MSc. Magalys González Hernández',
        cargo: 'Secretaria General',
        telefono: '(53) 48 779354',
        foto: 'Magalys.jpeg'
      },
      {
        nombre: 'Lic. José Enrique Jiménez Barrera',
        cargo: 'Director de Cuadros',
        telefono: '(53) 48 779365'
      },
      {
        nombre: 'Lic. Jerónimo Leopoldo González Porras',
        cargo: 'Director de Contabilidad y Finanzas',
        telefono: '(53) 48 753257'
      },
      {
        nombre: 'Lic. Ana Teresa Zubizarreta Santos',
        cargo: 'Asesora del Rector',
        telefono: '(53) 48 779348/ (53) 48 777923',
        foto: 'AnaTeresa.jpeg'
      },
    ];

  //   this.syncService.getBoardDirectors().subscribe(data => {
  //     console.log(data);
  //   });

  //   this.data$ = this.syncService.getBoardDirectors().pipe(
  //     catchError(err => {
  //       this.error = true;
  //       return of([]);
  //     }),
  //     finalize(() => {
  //       console.log('finalize loading news');
  //  })
  //   );
  }

}
