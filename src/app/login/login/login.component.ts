
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,ReactiveFormsModule } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { userService } from 'src/app/user.service';
import { correntUserService } from 'src/app/correntUser.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
   correntUser!:User;
   hasUser:boolean=false
  
    
   LoginForm:FormGroup= new FormGroup({
    name: new FormControl(""),
    password: new FormControl(""),
    

  })
  
  constructor(private userService :userService,private correntUserService :correntUserService, private router:Router) {
    
   }

  ngOnInit(): void {
    
  }
    
   login():void {
    let f=this.LoginForm.value;
     this.userService.getUser(f.name,f.password)
     .subscribe(data=>{
      if (data)
      {  
        this.correntUser=data;
        this.correntUserService.corrent_user = this.correntUser;
        if (this.correntUser.isManager){
          // alert ("this is a manager")
          this.router.navigate(['/adminHome'])

        }
        else{
          this.router.navigate(['/userHome'])
          this.hasUser=true;
        }
     
       }
        else{
          
          this.router.navigate(['/errorPage'])
        }
      });
  }
 
}