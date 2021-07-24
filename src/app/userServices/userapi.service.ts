import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserapiService {

  constructor(private http : HttpClient ) { }

  getuerreg(params : any){

    let url = "https://reqres.in/api/login";
    return this.http.post(url,params);

  }

  getuserlist(pageno : number){
    let url = "https://reqres.in/api/users?page="+pageno;
    return this.http.get(url);
  }

// auth token function
  loggedin(){
  return !!localStorage.getItem('token');
  }

}
