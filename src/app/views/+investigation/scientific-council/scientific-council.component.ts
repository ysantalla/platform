import { Component, OnInit } from '@angular/core';
import { FadeInOut } from '@app/core/animations/app.animation';

interface CC {
  nombre: string;
  facultad?: string;
  cargo?: string;
  correo?: string;
  telefono?: string;
}

@Component({
  selector: 'app-scientific-council',
  templateUrl: './scientific-council.component.html',
  styleUrls: ['./scientific-council.component.scss'],
  animations: [FadeInOut]
})
export class ScientificCouncilComponent implements OnInit {

  ccd: CC[] = [];
  cc: CC[] = [];

  constructor() { }

  ngOnInit() {

    this.ccd = [
      {
        nombre: 'Dr.C. Maricela González',
        cargo: 'Presidente'
      },
      {
        nombre: 'Dr.C. Tania Yakelin',
        cargo: 'Vicepresidente'
      },
      {
        nombre: 'Dr.C. Alie Perez',
        cargo: 'Vicepresidente'
      }

    ];

    this.cc = [
      {
        nombre: 'Dr.C. Tania Vargas Fernández',
        facultad: 'Facultad de Ciencias Económicas y Empresariales'
      },
      {
        nombre: 'Dr.C. Carlos Cesar Torres Páez',
        facultad: 'Facultad de Ciencias Económicas y Empresariales'
      },
      {
        nombre: 'Dr.C. Soleidy Rivero Amador',
        facultad: 'Facultad de Ciencias Económicas y Empresariales'
      },
      {
        nombre: 'Dr.C. Diana de la Nuez Hernández',
        facultad: 'Facultad de Ciencias Económicas y Empresariales'
      },
      {
        nombre: 'Dr.C. Alie Pérez Véliz',
        facultad: 'Facultad de Ciencias Sociales y Humanísticas'
      },
      {
        nombre: 'Dr.C. Orisel Hernández Aguilar',
        facultad: 'Facultad de Ciencias Sociales y Humanísticas'
      },
      {
        nombre: 'Dr.C. Orestes Rodríguez Musa',
        facultad: 'Facultad de Ciencias Sociales y Humanísticas'
      },
      {
        nombre: 'Dr.C. Dianelkys Martínez Rodríguez',
        facultad: 'Facultad de Ciencias Sociales y Humanísticas'
      },
      {
        nombre: 'Dr.C. Jorge Luis Ferrer Cosme',
        facultad: 'Facultad de Ciencias Técnicas'
      },
      {
        nombre: 'Dr.C. Alina Alfonso Morejón',
        facultad: 'Facultad de Ciencias Técnicas'
      },
      {
        nombre: 'Dr.C. Arely Quintero Silverio',
        facultad: 'Facultad de Ciencias Técnicas'
      },
      {
        nombre: 'Dr.C. Leonardo Aguiar Trujillo',
        facultad: 'Facultad de Ciencias Técnicas'
      },
      {
        nombre: 'Dr.C. Robert Ramírez Hernández',
        facultad: 'Facultad de Ciencias Técnicas'
      },
      {
        nombre: 'Dr.C. José Raúl Vento Álvarez',
        facultad: 'Facultad de Ciencias Técnicas'
      },
      {
        nombre: 'Dr.C. Norma Vicenta Cabrera Domínguez',
        facultad: 'Departamento de Formación Pedagógica General'
      },
      {
        nombre: 'Dr.C. Beatriz Páez Rodríguez',
        facultad: 'Departamento de Formación Pedagógica General'
      },
      {
        nombre: 'Dr.C. Tania Yakelyn Cala Peguero',
        facultad: 'Centro de Estudios en Ciencias de la Educación'
      },
      {
        nombre: 'Dr.C. Juan Lázaro Márquez Marrero',
        facultad: 'Centro de Estudios en Ciencias de la Educación'
      },
      {
        nombre: 'Dr.C. Ernesto López Calichs',
        facultad: 'Centro de Estudios en Ciencias de la Educación'
      },
      {
        nombre: 'Dr.C. Taymi Breijo Worosz',
        facultad: 'Centro de Estudios en Ciencias de la Educación'
      },
      {
        nombre: 'Dr.C. Niurka Castillo Rocubert',
        facultad: 'Centro de Estudios de Medio Ambiente y Recursos Naturales'
      },
      {
        nombre: 'Dr.C. Evelyn Pérez Rodríguez',
        facultad: 'Centro de Estudios de Medio Ambiente y Recursos Naturales'
      },
      {
        nombre: 'Dr.C. Maidelyn Díaz Pérez',
        facultad: 'Centro de Recursos para el aprendizaje y la información'
      },
      {
        nombre: 'MSc. Mabel Rodriguez Poo',
        facultad: 'Centro de Recursos para el aprendizaje y la información'
      },
      {
        nombre: 'Dr.C. Dianelys Milagro León Lea',
        facultad: 'Departamento de Enseñanza Militar'
      },
      {
        nombre: 'Dr.C.: Nancy Amor Pérez',
        facultad: 'Departamento de Enseñanza Militar'
      },
      {
        nombre: 'Dr.C. Yolainy Govea Díaz',
        facultad: 'Facultad Cultura Física'
      },
      {
        nombre: 'Dr.C. Luis Alberto Cuesta Martínez',
        facultad: 'Facultad Cultura Física'
      },
      {
        nombre: 'Dr.C. Pedro Alberto Martínez Hernández',
        facultad: 'Facultad Cultura Física'
      },
      {
        nombre: 'Dr.C. Tania Rosa García Hernández',
        facultad: 'Facultad Cultura Física'
      },
      {
        nombre: 'Dr.C. Orlando Pedro Suárez Pérez',
        facultad: 'Facultad Cultura Física'
      },
      {
        nombre: 'Dr.C. Rosa María Tabares Arévalo',
        facultad: 'Facultad Cultura Física'
      },
      {
        nombre: 'Dr.C. Daniel Rojas Plasencia',
        facultad: 'Educación Primaria'
      },
      {
        nombre: 'Dr.C. Ada Lucía Bonilla Bichot ',
        facultad: 'Educación Primaria'
      },
      {
        nombre: 'Dr.C. Caridad de los Ángeles Pérez López',
        facultad: 'Educación Preescolar'
      },
      {
        nombre: 'Dr.C. Yanulde Massano Gálvez',
        facultad: 'Educación Artística'
      },
      {
        nombre: 'Dr.C. Sayuris González Reyes',
        facultad: 'Educación Especial'
      },
      {
        nombre: 'Dr.C. Ana Isis Valdés Valdés',
        facultad: 'Educación Especial'
      },
      {
        nombre: 'Dr.C. Roberto Isbel Morejón Quintana',
        facultad: 'Facultad de Educación Media'
      },
      {
        nombre: 'Dr.C. Carlos Luis Fernández Peña',
        facultad: 'Facultad de Educación Media'
      },
      {
        nombre: 'Dr.C. Leydis Iglesia Triana',
        facultad: 'Facultad de Educación Media'
      },
      {
        nombre: 'Dr.C. Caridad Amado Paula Acosta',
        facultad: 'Facultad de Educación Media'
      },
      {
        nombre: 'Dr.C. Karina Machín Hernández',
        facultad: 'Facultad de Educación Media'
      },
      {
        nombre: 'Dr.C. Jorge Candelario Milian',
        facultad: 'Facultad de Educación Media'
      },
      {
        nombre: 'Dr.C. Luis Mijares Núñez',
        facultad: 'Departamento de Lenguas Extranjeras'
      },
      {
        nombre: 'Dr.C. Gretel Geada López',
        facultad: 'Facultad de Ciencias Forestales y Agropecuarias'
      },
      {
        nombre: 'Dr.C. Alexei Yoan Martínez Robaina',
        facultad: 'Facultad de Ciencias Forestales y Agropecuarias'
      },
      {
        nombre: 'Dr.C. Daniel Alberto Álvarez Lazo',
        facultad: 'Facultad de Ciencias Forestales y Agropecuarias'
      },
      {
        nombre: 'Dr.C. Héctor Barrero Medel',
        facultad: 'Facultad de Ciencias Forestales y Agropecuarias'
      },
      {
        nombre: 'Dr.C. Jesús Torres Domínguez',
        facultad: 'Facultad de Ciencias Forestales y Agropecuarias'
      },
      {
        nombre: 'Dr.C. Mariol Morejón García',
        facultad: 'Facultad de Ciencias Forestales y Agropecuarias'
      },
    ];

  }

}
