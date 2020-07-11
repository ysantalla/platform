import { Component, OnInit } from '@angular/core';
import { FadeInOut } from '@app/core/animations/app.animation';


interface IPublications {
  logo: string;
  name: string;
  link: string;
  description?: string;
}

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss'],
  animations: [FadeInOut]
})
export class PublicationsComponent implements OnInit {

  data: IPublications[];

  constructor() { }

  ngOnInit() {

    this.data = [
      {
        name: 'Revista Podium',
        link: 'http://podium.upr.edu.cu/index.php/podium',
        logo: './assets/img/logos/revistas/podium.svg',
        description: 'La revista PODIUM, de Acceso Abierto y Evaluada por Pares,  es una publicación del Centro de Estudios del Entrenamiento Deportivo en el Alto Rendimiento (CEEDAR), adscrito a la Facultad de Cultura Física "Nancy Uranga Romagoza", de la Universidad de Pinar del Río "Hermanos Saíz Montes de Oca". PODIUM tiene como objetivos principales la divulgación de los resultados de los investigadores de las Ciencias de la Actividad Física y del Deporte y la contribución en la profundización de las diversas dimensiones del conocimiento de esta rama del saber. La revista PODIUM se publica con una frecuencia cuatrimestral; en los períodos enero-abril, mayo-agosto y septiembre-diciembre. Esta revista no cobra ningún tipo de cuota o cargo por publicación y asume la Licencia Creative Commons 4.0 internacional.'
      },
      {
        name: 'Revista CFORES',
        link: 'http://cfores.upr.edu.cu/index.php/cfores',
        logo: './assets/img/logos/revistas/cfores.svg',
        description: 'La Revista Cubana de Ciencias Forestales (CFORES) es una publicación del Centro de Estudios Forestales (CEF), adscrito a la Facultad Ciencias Forestales y Agropecuarias de la Universidad de Pinar del Río “Hermanos Saíz Montes de Oca” (Cuba). Es una publicación electrónica y seriada de la provincia de Pinar del Río, territorio más occidental de Cuba, cuyo propósito es satisfacer la necesidad de socializar la información científica a partir de los logros alcanzados por los profesionales en las Ciencias Forestales, constituyendo así una vía importante para difundir la experiencia de diferentes países e instituciones internacionales. El objetivo de la revista CFORES es contribuir a la divulgación y promoción de los principales resultados de la ciencia en el área forestal y a la diseminación de nuevos conocimientos entre la comunidad científica cubana y del mundo. Podrán participar autores de todo el país, quienes podrán publicar editoriales, artículos científicos, avances del sector forestal y enseñanza forestal. La Revista Cubana de Ciencias Forestales se publica con una frecuencia cuatrimestral en los períodos enero-abril, mayo-agosto y septiembre-diciembre. Esta revista no cobra ningún tipo de cuota o cargo por publicación y asume la Licencia Creative Commons 4.0 internacional.'
      },
      {
        name: 'Revista CIFAM',
        link: 'http://cifam.upr.edu.cu/index.php/cifam',
        logo: './assets/img/logos/revistas/cifam.svg',
        description: ''
      },
      {
        name: 'Revista Mendive',
        link: 'http://mendive.upr.edu.cu/index.php/MendiveUPR',
        logo: './assets/img/logos/revistas/mendive.svg',
        description: 'La Revista de Educación Mendive es una publicación del Centro de Estudios de Ciencias de la Educación, de la Universidad de Pinar del Río "Hermanos Saíz Montes de Oca" (Cuba), dirigida a investigadores en las diversas ciencias de la educación y a docentes y estudiantes de la formación profesional pedagógica, en pregrado y postgrado, así como a personas e instituciones interesadas en la formación de las nuevas generaciones, tanto en Cuba como a nivel internacional. La revista Mendive, de Acceso Abierto y Evaluada por Pares, constituye en la vía por excelencia de divulgación de los resultados del trabajo áulico e investigativo de los maestros y profesores de Pinar del Río, de Cuba y de todo el mundo, compartiendo experiencias novedosas en la Educación Primaria, Secundaria, Preuniversitaria, Técnico-Profesional, de Adultos y Universitaria; que como se originan en una labor continua y sistemática, se constituyen en experiencias muy interesantes y tienen el valor agregado del prestigio que posee la educación cubana a nivel internacional. Mendive tiene una periodicidad trimestral en los períodos enero-marzo, abril-junio, julio-septiembre y octubre-diciembre. Además la publicación está asentada en el Registro Nacional de Publicaciones Seriadas con el número 2057, del Folio 86, Tomo III, con número de ISSN 1815-7696. Esta revista no cobra ningún tipo de cuota o cargo por publicación y asume la Licencia Creative Commons 4.0 internacional.'
      },
      {
        name: 'Revista COODES',
        link: 'http://coodes.upr.edu.cu/index.php/coodes',
        logo: './assets/img/logos/revistas/coodes.svg',
        description: 'La revista Cooperativismo y Desarrollo (COODES) es una publicación del Centro de Estudios de Dirección, Desarrollo Local, Turismo y Cooperativismo (CE-GESTA), adscrito a la Facultad de Ciencias Económicas y Empresariales, de la Universidad de Pinar del Río "Hermanos Saíz Montes de Oca" (Cuba). COODES es una publicación de acceso abierto y evaluada por pares, dirigida a científicos sociales y profesionales vinculados con el cooperativismo, la dirección, el desarrollo local y el turismo, así como a personas e instituciones interesadas en los temas que en ella se abordan. La revista constituye una vía importante para la socialización de aportes teóricos, metodológicos y prácticos asociados a su perfil temático y se publica con una frecuencia trimestral (enero-abril-julio-octubre). Su idioma de publicación es el español y brinda el título y resumen de cada artículo en idioma inglés. Esta revista no cobra ningún tipo de cuota o cargo por publicación y asume la Licencia Creative Commons 4.0 internacional.'
      },
    ];
  }

}
