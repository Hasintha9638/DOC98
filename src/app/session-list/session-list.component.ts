import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


export interface Sessions{
  id:string;
  doctor_id:string;
  hospital_id:string;
  date_time:string;
  count:string;
  hospital_name:string;
  doctor_name:string;
  speciality_name:string;
  hospital_place:string;
  next:string;


}

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {


  sid:number;
  hid:number;
  did:number;

  //2.array
  sessions:Sessions[]=[];

   //3.http ci
  constructor(public http:HttpClient , public router:Router ,public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      this.sid=+params['sid'] || 0;
      this.did=+params['did'] || 0;
      this.hid=+params['hid'] || 0;
    });
    //4.load data
    var url="http://beezzserver.com/nadun/channeling/session/index.php?sid="+
    this.sid+"&hid="+this.hid+"&did="+this.did;
    this.http.get<Sessions[]>(url).subscribe(data=>{
      this.sessions=data;
    });

  }
  book(id){
    this.router.navigate(['/book'],{
      queryParams:{session_id:id} 

    });
  }

}
