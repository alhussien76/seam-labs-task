import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-timer-countdown',
  templateUrl: './timer-countdown.component.html',
  styleUrls: ['./timer-countdown.component.scss']
})
export class TimerCountdownComponent implements OnInit {
  remainingSecond = 998400
  days: number = Math.floor(this.remainingSecond / (60 * 60 * 24))
  hours: number = Math.floor((this.remainingSecond / (60 * 60)) % 24);
  minutes: number = Math.floor((this.remainingSecond / 60) % 60);
  seconds: number = Math.floor((this.remainingSecond) % 60);

  constructor() { }
  ngOnInit(): void {
    const subscribtion: Subscription = interval(1000).subscribe(() => {
      if (this.days === 0 && this.hours === 0 && this.minutes === 0 && this.seconds == 0) {
        subscribtion.unsubscribe();
      }
      this.remainingSecond--;
      this.days = Math.floor(this.remainingSecond / (60 * 60 * 24));
      this.hours = Math.floor((this.remainingSecond / (60 * 60)) % 24);
      this.minutes = Math.floor((this.remainingSecond / 60) % 60);
      this.seconds = Math.floor((this.remainingSecond) % 60);
      if (this.days === 0 && this.hours === 0 && this.minutes === 0 && this.seconds == 0) {
        subscribtion.unsubscribe();
      }

      console.log(this.minutes, this.seconds);
    });
  }


}
