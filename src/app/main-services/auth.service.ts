import { Injectable } from "@angular/core";
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _isLoggedIn: boolean = false;
  constructor(private _afAuth: AngularFireAuth) {

  }

  isLoggedIn() {
    return this._isLoggedIn;
  }

  loginUser(email, password) {
    this._afAuth.signInWithEmailAndPassword(email, password)
      .then(res => this.successfulLoginResponse(res))
      .catch(error => this.rejectedLoginResponse(error));
  }
  successfulLoginResponse(res) {
    this._isLoggedIn = true;
  }
  rejectedLoginResponse(error) {

  }
  logoutUser() {
    this._afAuth.signOut()
    this._isLoggedIn = false;
  }

  registerUser(email, password) {
    this._afAuth.createUserWithEmailAndPassword(email, password).then(res => console.log(res));
  }

  passwordReset() {

  }

}
