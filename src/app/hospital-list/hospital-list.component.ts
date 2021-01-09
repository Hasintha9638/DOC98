import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


//create interface
export interface Hospital{
  id:string;
  name:string;
  place:string;
}


@Component({
  selector: 'app-hospital-list',
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.css']
})
export class HospitalListComponent implements OnInit {
  //create empty array
  hospitals:Hospital[]=[];

  //constructor argumrnt for http
 
  constructor(public http:HttpClient) { }

  ngOnInit(): void {
    let url="https://beezzserver.com/hasintha/channeling/hospital/index.php";
    //load data
    this.http.get<Hospital[]>(url).subscribe(data=>{
      this.hospitals=data;
    });

  }

}
