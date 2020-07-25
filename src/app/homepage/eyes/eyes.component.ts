import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-eyes',
  templateUrl: './eyes.component.html',
  styleUrls: ['./eyes.component.scss']
})
export class EyesComponent implements OnInit {

  constructor() { }

  @ViewChild('leftEye') leftEye: ElementRef;
  @ViewChild('rightEye') rightEye: ElementRef;

  @HostListener('window:mousemove', ['$event'])
  moveEye($event) {
    this.handleMovingEye('leftEye', $event)
    this.handleMovingEye('rightEye', $event)
  }

  handleMovingEye(eye: string, event) {
    const eyeRef = this[eye].nativeElement;
    const eyeX = eyeRef.getBoundingClientRect().left + eyeRef.clientWidth / 2;
    const eyeY = eyeRef.getBoundingClientRect().top + eyeRef.clientHeight / 2;
    let radian = Math.atan2(event.pageX - eyeX, event.pageY - eyeY);
    let rot = (radian * (180 / Math.PI) * -1) + 270;
    eyeRef.style.transform = `rotate(${rot}deg)`;
  }
  ngOnInit(): void {
  }
}
