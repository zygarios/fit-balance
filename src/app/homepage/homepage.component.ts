import { Component, OnInit } from '@angular/core';
import { animations } from "../animations";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  animations: [animations]
})
export class HomepageComponent implements OnInit {
  isClicked = false;
  constructor() { }

  ngOnInit(): void {
  }
  click() {
    this.isClicked = !this.isClicked;
  }
}
