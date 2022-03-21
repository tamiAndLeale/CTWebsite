import { Component, OnInit } from '@angular/core';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { portfolioService } from 'src/app/portfolio.sevice';
import { portfolioDTO } from 'src/app/models/portfolioDTO.model';
@Component({
  selector: 'app-portfolio-from-admin',
  templateUrl: './portfolio-from-admin.component.html',
  styleUrls: ['./portfolio-from-admin.component.css'],
  providers: [MessageService]
})
export class PortfolioFromAdminComponent implements OnInit {
  portfolio!:portfolioDTO[];
  columnsToDisplay: string[] = ['dateOfOpen', 'dedLine', 'userId', 'type'];
  dataSource = new MatTableDataSource<portfolioDTO>(this.portfolio);



  constructor(private _liveAnnouncer: LiveAnnouncer,private portfolioService:portfolioService , private messageService: MessageService,private router:Router)
   { 

   }
   @ViewChild(MatSort) sort!: MatSort ;
 

   ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.portfolioService.getAllPortfolios().subscribe(data=>this.portfolio=data);
  }
  private handleContacts() {
 
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
 

  sortData(sort: any) {
    const data = this.portfolio.slice();
    if (!sort.active || sort.direction === '') {
      this.portfolio = data;
      return;
    }

    this.portfolio = data.sort((a: any, b: any) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'type':
          return this.compare(a.type, b.type, isAsc);
        // case 'type':
        //   return this.compare(a.lastName, b.lastName, isAsc);
        
        default:
          return 0;
      }
    });
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
 

}











