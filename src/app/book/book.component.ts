import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  nameControl=new FormControl();
  emailControl=new FormControl();
  phoneControl=new FormControl();
  nicControl=new FormControl();

  session_id:number;

  constructor(public http:HttpClient,public router:Router,public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      this.session_id=+params["session_id"] ||0;
    });
  }


  reset(){

  }
  confirm(){
    // 1.collect parameters
    let body=new HttpParams({
      fromObject:{
        'name':this.nameControl.value,
        'email':this.emailControl.value,
        'mobile':this.phoneControl.value,
        'nic':this.nicControl.value,
        'session_id':this.session_id.toString() 
      }
    });



    //2.send to a url
    var url="http://beezzserver.com/nadun/channeling/appointment/insert.php";
    this.http.post(url,body).subscribe(
      data=>{
        alert(data);
      }
    )


  }

}
