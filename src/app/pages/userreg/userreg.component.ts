import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators } from '@angular/forms';
import { UserapiService } from '../../userServices/userapi.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-userreg',
  templateUrl: './userreg.component.html',
  styleUrls: ['./userreg.component.css']
})
export class UserregComponent implements OnInit {

  constructor(private http : UserapiService , private router : Router) { }

  successstatus : boolean = false;
  mgsstatus: String ="";
  userdata$!: Observable<any>;
   
  userreg = new FormGroup({
    email : new FormControl('' , Validators.required),
    password : new FormControl('' , Validators.required),
   })

  ngOnInit(): void {
  }

  get email(){ return this.userreg.get('email')}
  get password(){ return this.userreg.get('password')}


  
  reguser(){
    if(this.userreg.get('email')?.value == "" && this.userreg.get('password')?.value == "")
    {
      this.successstatus = true;
      this.mgsstatus = "NO Empty Space Allowed..!!"
    }
    else{
      console.log("form value",this.userreg.value)
      this.userdata$ = this.http.getuerreg(this.userreg.value);
      this.userdata$.subscribe((data)=>{
        localStorage.setItem('token',data.token);
        this.router.navigate(['/dashbord']);
      },(error)=>{
        console.log(error);
            this.successstatus = true;
           this.mgsstatus = error.error.error;
      });

    }
   
  }

}
