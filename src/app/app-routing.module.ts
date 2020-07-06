import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomepageComponent } from "./homepage/homepage.component";
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  {
    path: '', component: HomepageComponent, canActivate: [AuthGuard],
  },
  { path: 'login', component: HomepageComponent },
  { path: '**', redirectTo: '/' }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
