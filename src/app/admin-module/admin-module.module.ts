import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UsersComponent } from './users/users.component';
import { RouterModule, Routes, ROUTES } from '@angular/router';

import { userService } from '../user.service';
import { MatTableModule } from '@angular/material/table';
import { PortofolioForAdminComponent } from './portofolio-for-admin/portofolio-for-admin.component';
import { portfolioService } from '../portfolio.sevice';
import { PortfolioFolderAdminComponent } from './portfolio-folder/portfolio-folder.component';
import { FilesAdminComponent } from './files/files.component';
import { NewUserComponent } from './new-user/new-user.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NewPortfolioComponent } from './new-portfolio/new-portfolio.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { NewDocumentComponent } from './new-document/new-document.component';
import { PortfolioFromAdminComponent } from './portfolio-from-admin/portfolio-from-admin.component';


const ROUTES2: Routes=[
 
  {path:"users",component:UsersComponent},
  {path: "portfolios/:userId", component: PortofolioForAdminComponent}
]




@NgModule({
  declarations: [
    AdminHomeComponent,
   
    UsersComponent,
    PortofolioForAdminComponent,
    PortfolioFolderAdminComponent,
    FilesAdminComponent,
    NewUserComponent,
    NewPortfolioComponent,
    NewDocumentComponent,
    PortfolioFromAdminComponent,
 
   

  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES2),
    // MatDialog,
     MatTableModule,
     FormsModule,
     ReactiveFormsModule,
     MatInputModule,
     MatFormFieldModule,
     MatSelectModule,
     MatDatepickerModule
  ],
  providers:[
    userService,
    portfolioService
  ]
})



export class AdminModuleModule { 

}
