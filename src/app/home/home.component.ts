import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { constants } from 'buffer';
import { from, Observable } from 'rxjs';
import {map,startWith} from 'rxjs/operators';

//.1
export interface Speciality{
  id:string;
  name:string;
}
export interface Hospital{
  id:string;
  name:string;
  place:string;
}
export interface Doctor{
  id:string;
  name:string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //2.
  specialities:Speciality[]=[];
  hospitals:Hospital[]=[];
  doctors:Doctor[]=[];
  //3.
  constructor(public http:HttpClient,public router:Router) { }

  //filitered option
  // a.create formControl object for editable components || app.module.ts import ReactiveFormModule
  SpecialityControl=new FormControl();
  HospitalControl=new FormControl();
  DoctorControl=new FormControl();



  //b.create Array variable for filtered data
  filteredSpecialities:Observable<Speciality[]>;
  filteredHospitals:Observable<Hospital[]>;
  filteredDoctors:Observable<Doctor[]>;

  //4.
  ngOnInit(): void {
    let url="https://beezzserver.com/hasintha/channeling/speciality/index.php ";
    this.http.get<Speciality[]>(url).subscribe(data=>{
        this.specialities=data;
    });

    let url2="https://beezzserver.com/hasintha/channeling/hospital/index.php ";
    this.http.get<Hospital[]>(url2).subscribe(data=>{
        this.hospitals=data;
    });

    let url3="https://beezzserver.com/hasintha/channeling/doctor/index.php ";
    this.http.get<Doctor[]>(url3).subscribe(data=>{
        this.doctors=data;
    });
    //c.filterd optons filter
    this.filteredSpecialities=this.SpecialityControl.valueChanges.pipe(
      startWith<string| Speciality>(''),
      map(value =>typeof value=== 'string'? value:value.name),
      map(name => name?this._filter1(name):this.specialities.slice()) 
    );
    this.filteredHospitals=this.HospitalControl.valueChanges.pipe(
      startWith<string| Hospital>(''),
      map(value =>typeof value=== 'string'? value:value.name),
      map(name => name?this._filter2(name):this.hospitals.slice()) 
    );
    this.filteredDoctors=this.DoctorControl.valueChanges.pipe(
      startWith<string| Doctor>(''),
      map(value =>typeof value=== 'string'? value:value.name),
      map(name => name?this._filter3(name):this.doctors.slice()) 
    );

    
  }
//d.filter function
  private _filter1(name:string):Speciality[]{
    const filteredValue=name.toLocaleLowerCase();
    return this.specialities.filter(option=>option.name.toLocaleLowerCase().indexOf(filteredValue)===0);
  }

  private _filter2(name:string):Hospital[]{
    const filteredValue=name.toLocaleLowerCase();
    return this.hospitals.filter(option=>option.name.toLocaleLowerCase().indexOf(filteredValue)===0);
  }
  private _filter3(name:string):Doctor[]{
    const filteredValue=name.toLocaleLowerCase();
    return this.doctors.filter(option=>option.name.toLocaleLowerCase().indexOf(filteredValue)===0);
  }

  //e.display name overide
  displayFn1(speciality?:Speciality):string | undefined{
    return speciality?speciality.name:undefined;
  }

  displayFn2(hospital?:Hospital):string | undefined{
    return hospital?hospital.name:undefined;
  }
  displayFn3(doctor?:Doctor):string | undefined{
    return doctor?doctor.name:undefined;
  }


  reset(){
    this.SpecialityControl.reset();
    this.DoctorControl.reset();
    this.HospitalControl.reset();

  }

  search(){
    var sid=(this.SpecialityControl.value)?this.SpecialityControl.value.id:0;
    var did=(this.DoctorControl.value)?this.DoctorControl.value.id:0;
    var hid=(this.HospitalControl.value)?this.HospitalControl.value.id:0;

    this.router.navigate(
      ['/session-list'],
      {queryParams:{sid:sid,did:did,hid:hid}}
      ); 
  }




}
