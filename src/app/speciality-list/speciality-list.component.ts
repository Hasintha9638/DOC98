import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

//connect databse link
//.create an interface for object type with variable
export interface Speciality{
  id: string;
  name:string;
} 


@Component({
  selector: 'app-speciality-list',
  templateUrl: './speciality-list.component.html',
  styleUrls: ['./speciality-list.component.css']
})
export class SpecialityListComponent implements OnInit {

  //2.create an empty object array
  specialities:Speciality[]=[];

  //3.
  //a.import httpClientModule in app.nodule.ts file
  //b.create constructor argument for http variable (Automatically Injects the Object)
  
  constructor(public http:HttpClient) { }


  ngOnInit(): void {
    //4.load objects from WS/API
  let url="https://beezzserver.com/hasintha/channeling/speciality/index.php";
  this.http.get<Speciality[]>(url)
    .subscribe(data=>{
      this.specialities=data;
    });
  }
  
}
