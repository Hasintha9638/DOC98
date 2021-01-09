import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export interface Doctor{
  id:string;
  name:string;
  speciality_name:string;

}

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

  doctors:Doctor[]=[];

  constructor(public http:HttpClient) { }

  ngOnInit(): void {
    let url="http://beezzserver.com/hasintha/channeling/doctor/index.php";
    this.http.get<Doctor[]>(url).subscribe(data=>{
      this.doctors=data;
    });

  }

}
