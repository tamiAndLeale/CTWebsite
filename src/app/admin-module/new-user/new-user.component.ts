import { Component, OnInit } from '@angular/core';
import {FormControl, Validators,FormGroup} from '@angular/forms';
import { userService } from 'src/app/user.service';
@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  constructor(private userService:userService ) { }

  ngOnInit(): void {
  }
  email =new FormControl('', [Validators.required, Validators.email]);
success!:number

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  addUser():void{
    let u=this.email.value;
    this.userService.addUser(u)
   .subscribe(data=>this.success=data)
    
  ;
}
}
