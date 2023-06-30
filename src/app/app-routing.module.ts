import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TrackingComponent } from './tracking/tracking.component';


const routes: Routes = [{path:"login", component:LoginComponent},{path:"tracking",component:TrackingComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
