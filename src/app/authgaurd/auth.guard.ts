import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserapiService } from '../userServices/userapi.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private http : UserapiService ,
    private route : Router){}

canActivate():boolean{ 
if(this.http.loggedin()){
return true ;
}else{
this.route.navigate(['/']);
return false;
}
}

  
}
