import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feature-course',
  templateUrl: './feature-course.component.html',
  styleUrls: ['./feature-course.component.scss']
})
export class FeatureCourseComponent {

  @Input() image = ''
  @Input() logo = ''
  @Input() content = ''
  @Input() place = ''
  constructor() { }



}
