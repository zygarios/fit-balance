import { Component } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AuthService } from "./auth/auth.service";
import { DeviceDetectorService } from "./main-services/device-detector.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private _deviceDetector: DeviceDetectorService, private _db: AngularFirestore, private _authService: AuthService) {

  }
  ngOnInit(): void {
    this._deviceDetector.initDeviceDetector()
  }
}
