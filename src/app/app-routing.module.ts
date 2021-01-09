import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { HomeComponent } from './home/home.component';
import { HospitalListComponent } from './hospital-list/hospital-list.component';
import { PastAppoimentsComponent } from './past-appoiments/past-appoiments.component';
import { SpecialityListComponent } from './speciality-list/speciality-list.component';
import { SessionListComponent } from './session-list/session-list.component';
import { BookComponent } from './book/book.component';


const routes: Routes = [
{path:'',component:HomeComponent},
{path:'past_appoinments', component:PastAppoimentsComponent},
{path:'speciality_list', component:SpecialityListComponent},
{path:'doctor_list', component:DoctorListComponent},
{path:'hospital_list', component:HospitalListComponent},
{path:'session-list', component:SessionListComponent},
{path:'book', component:BookComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
