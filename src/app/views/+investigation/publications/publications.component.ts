import { Component, OnInit } from '@angular/core';


interface IPublications {
  logo: string;
  name: string;
  link: string;
}

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {

  data: IPublications[];

  constructor() { }

  ngOnInit() {
    this.data = [
      {
        name: 'Revista de Ciencias Forestales',
        link: 'http://cef.upr.edu.cu',
        logo: './assets/img/logos/CEF.png'
      },
    ];
  }

}
