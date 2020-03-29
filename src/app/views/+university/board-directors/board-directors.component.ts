import { Component, OnInit } from '@angular/core';
import { SyncService } from '../services/sync.service';
import { Observable, of } from 'rxjs';
import { finalize, catchError } from 'rxjs/operators';

import {environment as env} from '@env/environment';

interface CD {
  nombre: string;
  cargo: string;
  telefono: string;
}

@Component({
  selector: 'app-board-directors',
  templateUrl: './board-directors.component.html',
  styleUrls: ['./board-directors.component.scss']
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
        nombre: "Dr.C. Yorki Mayor Hernández",
        cargo: "Rector",
        telefono: "(53) 48 779348/ (53) 48 777923"
      },
      {
        nombre: "Dr.C. Mario Luis Gómez Ivizate",
        cargo: "Vicerrector Primero",
        telefono: "(53) 48 728623"
      },
      {
        nombre: "Dra.C. Saray Nuñez González",
        cargo: "Vicerrectora",
        telefono: "(53) 48 728622"
      },
      {
        nombre: "Dra.C. María Cristina Salabarría Márquez",
        cargo: "Vicerrectora",
        telefono: "(53) 48 779349"
      },
      {
        nombre: "MSc. Reinier González Garrido",
        cargo: "Director general",
        telefono: "(53) 48728624/ (53) 48 753009"
      },
      {
        nombre: "MSc. Yosvany Barrios Hernández",
        cargo: "Director general",
        telefono: "(53) 48 759728"
      },
      {
        nombre: "Dr.C. Luís Wilfredo Martínez Becerra",
        cargo: "Decano Facultad de Ciencias Forestales y Agropecuarias",
        telefono: "(53) 48 775452"
      },
      {
        nombre: "Dra.C. Dianelkys Martínez Rodríguez",
        cargo: "Decano Facultad de Ciencias Técnicas",
        telefono: "(53) 48 779358"
      },
      {
        nombre: "Dr.C. Jose Almeida Cordero Mederos",
        cargo: "Decano Facultad de Ciencias Económicas y Empresariales",
        telefono: "(53) 48 754289"
      },
      {
        nombre: "DrC. Julio Antonio Conill Armenteros",
        cargo: "Decano Facultad de Educación Infantil",
        telefono: "(53) 48 785102"
      },
      {
        nombre: "Dr.C. Roberto Isbel Morejón Quintana",
        cargo: "Decano Facultad de Educación Media",
        telefono: "(53) 48 767310"
      },
      {
        nombre: "MSc. Yadira Pérez Díaz",
        cargo: "Decana Facultad de Cultura Física",
        telefono: "(53) 48 728254"
      },
      {
        nombre: "MSc. Magalys González Hernández",
        cargo: "Secretaria General",
        telefono: "(53) 48 779354"
      },
      {
        nombre: "Lic. José Enrique Jiménez Barrera",
        cargo: "Director de Cuadros",
        telefono: "(53) 48 779365"
      },
      {
        nombre: "Lic. Jerónimo Leopoldo González Porras",
        cargo: "Director de Contabilidad y Finanzas",
        telefono: "(53) 48 753257"
      },
      {
        nombre: "Lic. Ana Teresa Zubizarreta Santos",
        cargo: "Asesora del Rector",
        telefono: "(53) 48 779348/ (53) 48 777923"
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
