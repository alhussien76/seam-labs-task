import { Component } from '@angular/core';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  courses = [
    { image: 'assets/img1.png', logo: 'assets/logo1.png', content: 'User Research for User Experience Design', place: 'The Museum of Modern Art' },
    { image: 'assets/img5.png', logo: 'assets/logo3.png', content: 'Buddhism and Modern Psychology', place: 'The Museum of Modern Art' },
    { image: 'assets/img9.png', logo: 'assets/logo2.png', content: 'Introduction to Philosophy', place: 'Duke University' },
    { image: 'assets/img4.png', logo: 'assets/logo1.png', content: 'Advance on Seeing Through Photographs', place: 'Duke University' },
    { image: 'assets/img2.png', logo: 'assets/logo2.png', content: 'Think Again I: How to Understand Arguments', place: 'The Museum of Modern Art' },
    { image: 'assets/img6.png', logo: 'assets/logo3.png', content: 'User Research for User Experience Design', place: 'The Museum of Modern Art' },
    { image: 'assets/img8.png', logo: 'assets/logo1.png', content: 'User Research for User Experience Design', place: 'The Museum of Modern Art' },
    { image: 'assets/img7.png', logo: 'assets/logo1.png', content: 'Introduction to Logic and Critical Thinking', place: 'Duke University' },
    { image: 'assets/img3.png', logo: 'assets/logo2.png', content: 'Modern and Contemporary Art and Design', place: 'The Museum of Modern Art' },
  ]




}
