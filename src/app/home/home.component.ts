import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images = [
    {
      imageSrc:
        '../../assets/carousel/1.jpeg',
      imageAlt: 'img1',
    },
    {
      imageSrc:
        '../../assets/carousel/2.jpeg',
      imageAlt: 'img1',
    },
    {
      imageSrc:
        '../../assets/carousel/3.jpeg',
      imageAlt: 'img1',
    }
  ]

}
