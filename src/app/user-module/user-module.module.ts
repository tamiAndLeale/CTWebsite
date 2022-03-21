import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortofolioComponent } from './portfolio-component/portofolio-component.component';
import { portfolioService } from 'src/app/portfolio.sevice';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes, ROUTES } from '@angular/router';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {ButtonModule} from 'primeng/button';
import { PortfolioFolderComponent } from './portfolio-folder/portfolio-folder.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UpdateDetailsComponent } from './update-details/update-details.component';
import { User } from '../models/user.model';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {  MatTableModule } from '@angular/material/table';
import { FilesComponent } from './files/files.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';

  



const ROUTES1: Routes=[
  {path:"portfolios", component: PortofolioComponent},
  {path:"portfolioFolder/:portfolioTypeId", component: PortfolioFolderComponent},
  {path:"userHome", component:UserHomeComponent},
  {path:"updateDetails", component:UpdateDetailsComponent},
  // outlet:"User"
  ]
@NgModule({
  declarations: [
    PortofolioComponent,
   
    PortfolioFolderComponent,
    UserHomeComponent,
    UpdateDetailsComponent,
    FilesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    TableModule,
ToastModule,
ButtonModule,
RouterModule.forRoot(ROUTES1),
BrowserModule,
BrowserAnimationsModule,
TableModule,
ButtonModule,
ToastModule,
HttpClientModule,
FormsModule,
MatTableModule,
// MatTableDataSource,
MatNativeDateModule,

ReactiveFormsModule,
MatCardModule
    // RouterModule.forRoot(
    //  //ROUTES
    // )

  ],
  providers:[],
 
  
})
export class UserModule { }
