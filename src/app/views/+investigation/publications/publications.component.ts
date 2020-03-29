import { Component, OnInit } from '@angular/core';
import { FadeInOut } from '@app/core/animations/app.animation';


interface IPublications {
  logo: string;
  name: string;
  link: string;
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
        logo: './assets/img/logos/revistas/podium.svg'
      },
      {
        name: 'Revista CFORES',
        link: 'http://cfores.upr.edu.cu/index.php/cfores',
        logo: './assets/img/logos/revistas/cfores.svg'
      },
      {
        name: 'Revista CIFAM',
        link: 'http://cifam.upr.edu.cu/index.php/cifam',
        logo: './assets/img/logos/revistas/cifam.svg'
      },
      {
        name: 'Revista Mendive',
        link: 'http://mendive.upr.edu.cu/index.php/MendiveUPR',
        logo: './assets/img/logos/revistas/mendive.svg'
      },
      {
        name: 'Revista COODES',
        link: 'http://coodes.upr.edu.cu/index.php/coodes',
        logo: './assets/img/logos/revistas/coodes.svg'
      },
    ];
  }

}
