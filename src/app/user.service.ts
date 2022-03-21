import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { User } from "src/app/models/user.model";
import { Observable } from "rxjs";
import { correntUserService } from "./correntUser.service";
import { Person } from "./models/person.model";


@Injectable({
    providedIn: 'root'
  })  
  export class userService{
  
  
  
  constructor(private _http:HttpClient) { }
  
    
  getUser(name: string,password: string):Observable<User> {
      
      return this._http.get <User>("/api/User/"+name+"/"+password);

    }
    getAllUsers():Observable<User[]> {
      
      return this._http.get <User[]>("/api/User/");

    }
  updatePerson(personToUpdate:Person):Observable<Person> {
    return this._http.put <Person>("/api/User",personToUpdate);
    }
    addUser(email:any):Observable<any> {
      return this._http.post <any>("/api/User",email);
      }
      deleteUser(id:number):Observable<any> {
        return this._http.delete <any>("/api/User/"+id);
        }
  }