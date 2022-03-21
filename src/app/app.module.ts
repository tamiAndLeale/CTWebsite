import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortofolioForAdminComponent } from './admin-module/portofolio-for-admin/portofolio-for-admin.component';
import { PortofolioComponent } from './user-module/portfolio-component/portofolio-component.component';
import { PortfolioFolderComponent } from './user-module/portfolio-folder/portfolio-folder.component';
import { UserModule } from './user-module/user-module.module';
// import {TableModule} from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelMenuModule } from 'primeng/panelmenu';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { UserHomeComponent } from './user-module/user-home/user-home.component';
import { UpdateDetailsComponent } from './user-module/update-details/update-details.component';
import { FilesComponent } from './user-module/files/files.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AdminHomeComponent } from './admin-module/admin-home/admin-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginModule } from './login/login.module';
import { UsersComponent } from './admin-module/users/users.component';
import { CommonModule } from '@angular/common';
import { AdminModuleModule } from './admin-module/admin-module.module';
import {ToastModule} from 'primeng/toast';
import { User } from './models/user.model';
import {   MatTableModule } from '@angular/material/table';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';

import { PortfolioFolderAdminComponent } from './admin-module/portfolio-folder/portfolio-folder.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
import { LoginComponent } from './login/login/login.component';
import { FilesAdminComponent } from './admin-module/files/files.component';
import {MatSortModule} from '@angular/material/sort';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { PortfolioFromAdminComponent } from './admin-module/portfolio-from-admin/portfolio-from-admin.component';

import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';

import "@angular/compiler"



const ROUTES: Routes=[
  {path:"errorPage", component:ErrorPageComponent},
  
 // {path:"portfolios", component: PortofolioComponent},
  {path:"userHome", component:UserHomeComponent,
  children: [{path: 'portfolios', component: PortofolioComponent},
  {path:"portfolioFolder/:portfolioTypeId/:portfolioId", component: PortfolioFolderComponent},
  {path:"files/:portfolioId/:folderId", component: FilesComponent},
  {path:"updateDetails", component:UpdateDetailsComponent}]},

  {path:"", component:LoginComponent},
  {path:"adminHome", component:AdminHomeComponent,children:
  [ {path:"users",component:UsersComponent},
  {path:"allPortfolios",component:PortfolioFromAdminComponent},
  {path: "portfolios/:userId", component: PortofolioForAdminComponent},
  {path:"portfolioFolder/:portfolioTypeId/:portfolioId", component: PortfolioFolderAdminComponent},
  {path:"files/:portfolioId/:folderId", component: FilesAdminComponent}
]},
  {path:"**", component:ErrorPageComponent},
  {path:"users",component:UsersComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    AppRoutingModule,
    UserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    MatSliderModule,
    PanelMenuModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    CommonModule,
    AdminModuleModule,
    ToastModule,
    MatSortModule,
    LoginModule,
    MatTableModule,
    MatNativeDateModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule

  ],
  
  providers: [{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}],
  bootstrap: [AppComponent],
  // schemas: [
  //   CUSTOM_ELEMENTS_SCHEMA,
  //   NO_ERRORS_SCHEMA
  // ]
  
 
})
export class AppModule { }
