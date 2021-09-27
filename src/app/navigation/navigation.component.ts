import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  socialImages: any = [
    { src: 'assets/fb.png', tooltip: 'Facebook' },
    { src: 'assets/Pinterest.png', tooltip: 'Pinterest' },
    { src: 'assets/twitter.png', tooltip: 'Twitter' },
    { src: 'assets/insta.png', tooltip: 'Instagram' },

  ]

  constructor() { }



}
