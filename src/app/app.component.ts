import { Component } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AuthService } from "./main-services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private _db: AngularFirestore, private _authService: AuthService) {

  }
  ngOnInit(): void {

  }
  onLogIn() {
    this._authService.loginUser('barzyg@wp.pl', 'costam');
  }
  onSave() {
    this._db.collection('availableExercises').valueChanges().subscribe(res => console.log(res))
  }
  onSignOut() {
    this._authService.logoutUser();
  }
}
