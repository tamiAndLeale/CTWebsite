import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { User } from "src/app/models/user.model";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
  })  
  export class correntUserService{
  
  corrent_user:User=new User();
  
  constructor(private _http:HttpClient) { }
  
    get_corrent_user(){
      return this.corrent_user;
    }
 
  }