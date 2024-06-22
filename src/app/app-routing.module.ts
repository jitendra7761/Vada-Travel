import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { VehicleRegistrationComponent } from './components/vehicle-registration/vehicle-registration.component';
const routes: Routes = [

 
  {
    path:'app-navbar',component:NavbarComponent
  },
  {
    path:'vehicleRegistration',component:VehicleRegistrationComponent
  },

]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
