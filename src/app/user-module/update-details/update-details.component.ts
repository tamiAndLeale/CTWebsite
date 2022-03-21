import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { userService } from 'src/app/user.service';
import { correntUserService } from 'src/app/correntUser.service';
import { Router } from '@angular/router';
import { Person } from 'src/app/models/person.model';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent implements OnInit {
  updatePerson!:Person

  updateDetailsForm!:FormGroup;
  
 

  
  constructor(private userService :userService,private correntUserService :correntUserService, private router:Router) { }

  ngOnInit(): void {
    this.updateDetailsForm= new FormGroup({
      identity: new FormControl(""),
      firstName: new FormControl(""),
      lastName: new FormControl(""),
      phone: new FormControl(""),
      email: new FormControl(""),
      country: new FormControl(""),
      city: new FormControl(""),
      street: new FormControl(""),
      houseNumber: new FormControl(""),
      apartmentNumber: new FormControl("")
    })
  }
  update(){
    let u=this.updateDetailsForm.value;
    console.log(u);


     this.userService.updatePerson(new Person(this.correntUserService.corrent_user.personId,
      u.identity,
      u.firstName,
      u.lastName,
      u.phone,
      u.email,
      u.country,
      u.city,
      u.street,
      u.houseNumber,
      u.apartmentNumber)) .subscribe(data=>{
        if (data)
        {  
          this.updatePerson=data;
          this.correntUserService.corrent_user.identity = this.updatePerson.identity;
          this.correntUserService.corrent_user.firstName = this.updatePerson.firstName;
          this.correntUserService.corrent_user.lastName = this.updatePerson.lastName;
          this.correntUserService.corrent_user.phone = this.updatePerson.phone;
          this.correntUserService.corrent_user.email = this.updatePerson.email;
          this.correntUserService.corrent_user.country = this.updatePerson.country;
          this.correntUserService.corrent_user.city = this.updatePerson.city;
          this.correntUserService.corrent_user.street = this.updatePerson.street;
          this.correntUserService.corrent_user.houseNumber = this.updatePerson.houseNumber;
          this.correntUserService.corrent_user.apartmentNumber = this.updatePerson.apartmentNumber;
          alert("השינוי נקלט בהצלחה!")
          this.router.navigate(['/userHome'])
         }
          else{
            
            this.router.navigate(['/errorPage'])

          }
        });

  }
}
