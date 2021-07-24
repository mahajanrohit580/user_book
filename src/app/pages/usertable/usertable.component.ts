import { Component, OnInit } from '@angular/core';
import { UserapiService } from '../../userServices/userapi.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {

   userlist$!:Observable<any>;
   userlistdetalis : any =[] ;
   page =1;


  constructor(private http : UserapiService , private router : Router ) {
     
    
   }

  ngOnInit(): void {
    
     this.userlist$ = this.http.getuserlist(this.page);
     this.userlist$.subscribe((data)=>{
       this.userlistdetalis = data.data;
     },(error)=>{
       console.log(error);
     });


  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

}
