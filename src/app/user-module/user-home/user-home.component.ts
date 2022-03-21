import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { correntUserService } from 'src/app/correntUser.service';
import { tmpData } from 'src/app/models/tmpData.model';
import { User } from 'src/app/models/user.model';

import { PortofolioComponent } from '../portfolio-component/portofolio-component.component';
import { PortfolioFolderComponent } from '../portfolio-folder/portfolio-folder.component';
import { UpdateDetailsComponent } from '../update-details/update-details.component';
  
// const ROUTES: Routes=[
//   {path:"portfolioFolder/:portfolioTypeId", component: PortfolioFolderComponent},
//   {path:"updateDetails", component:UpdateDetailsComponent},
//   {path:"", component: PortofolioComponent}]

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./userHome.component.css']
})


export class UserHomeComponent implements OnInit {

  _correntUserService!:User


  constructor(private correntUserService :correntUserService, private router:Router) {this._correntUserService=correntUserService.corrent_user }

  ngOnInit(): void {
    
     this.router.navigate(['/userHome/portfolios'])
  
   

  }
  update(){
   this.router.navigate(['/userHome/updateDetails'])
  }
  folder(data:tmpData){
    this.router.navigate(['/userHome/portfolioFolder',data.portfolioTypeId,data.portfolioId])
   }

}
