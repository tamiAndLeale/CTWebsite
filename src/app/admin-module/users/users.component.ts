import { AfterViewInit, Component, OnInit,ViewChild } from '@angular/core';
import { Router ,Routes} from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/models/user.model';
import { userService } from 'src/app/user.service';
// import { EventEmitter } from 'stream';
import { portfolioService } from 'src/app/portfolio.sevice';

import {LiveAnnouncer} from '@angular/cdk/a11y';

import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog} from '@angular/material/dialog'

import { EventEmitter } from '@angular/core';

import { NewUserComponent } from '../new-user/new-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [MessageService]
})
//trynig gitHub!!!!
export class UsersComponent implements OnInit,AfterViewInit {

users!:User[]


  constructor(public dialog: MatDialog,private _liveAnnouncer: LiveAnnouncer,private portfolioService:portfolioService, private userService:userService , private messageService: MessageService,private router:Router) { }

  ngOnInit(): void {
   
    this.userService.getAllUsers().subscribe(data=>this.users=data)
  }
 
  portfolioForUser(userId:number){
    
    this.router.navigate(['/adminHome/portfolios',userId])
    console.log(userId)
  }

  columnsToDisplay: string[] = ['מייל','כתובת','טלפון','שם משפחה','שם פרטי','מחיקה'];
  dataSource = new MatTableDataSource<User>(this.users);

  @ViewChild (MatSort) sort!: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
  
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
 

  sortData(sort: Sort) {
    const data = this.users.slice();
    if (!sort.active || sort.direction === '') {
      this.users = data;
      return;
    }

    this.users = data.sort((a: any, b: any) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'שם פרטי':
          return this.compare(a.firstName, b.firstName, isAsc);
        case 'שם משפחה':
          return this.compare(a.lastName, b.lastName, isAsc);
        // case 'fat':
        //   return this.compare(a.fat, b.fat, isAsc);
        // case 'carbs':
        //   return this.compare(a.carbs, b.carbs, isAsc);
        // case 'protein':
        //   return this.compare(a.protein, b.protein, isAsc);
        default:
          return 0;
      }
    });
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
 
  openDialog() {
    this.dialog.open(NewUserComponent);
  }
  deleteUser(id:number){
    // this.userService.deleteUser(id);
    alert("למחוק לקוח זה לצמיתות?")
  }
}






