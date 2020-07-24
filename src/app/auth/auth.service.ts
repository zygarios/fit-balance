import { Injectable } from "@angular/core";
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private _afAuth: AngularFireAuth) {

  }

  isLoggedIn(): boolean {
    return true;
  }

  loginUser(email, password) {
  }

  successfulLoginResponse(res) {
  }
  rejectedLoginResponse(error) {

  }
  logoutUser() {
  }

  registerUser(email, password) {
  }

  passwordReset() {

  }

}
