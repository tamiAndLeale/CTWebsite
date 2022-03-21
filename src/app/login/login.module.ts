import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
import {   MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    MatNativeDateModule,
    MatCardModule,
    // MatDialog,
    MatSliderModule,
    ReactiveFormsModule,
    //  MatTableDataSource,
    MatTableModule
  ]
})
export class LoginModule { }
