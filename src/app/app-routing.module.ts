import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomepageComponent } from "./homepage/homepage.component";
import { LoginComponent } from './login/login.component';
import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'homepage',
  },
  { path: 'homepage', component: HomepageComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/' }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
