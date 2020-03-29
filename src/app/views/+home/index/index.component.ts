import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { EnterLeft, EnterRight, FadeInOut } from '@app/core/animations/app.animation';


class Numbers {
  [index: string]: number;
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  animations: [EnterLeft, EnterRight, FadeInOut]
})
export class IndexComponent implements OnInit {

  color: string;
  otherColor: string;
  numbers: Numbers;

  customOptions: OwlOptions = {
    loop: true,
    dots: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      }
    },
    nav: false,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 1000
  };

  constructor() {

    this.numbers = new Numbers();

    this.numbers['undergraduate'] = 7674;
    this.numbers['postgraduate'] = 3123;

    this.numbers['profesors'] = 1465;
    this.numbers['masters'] = 785;
    this.numbers['doctors'] = 268;

    this.numbers['magazine'] = 5;
    this.numbers['study_center'] = 5;
    this.numbers['projects'] = 144;

   }

  ngOnInit() {
    this.color = 'white';
    this.otherColor = 'green';
  }

}
