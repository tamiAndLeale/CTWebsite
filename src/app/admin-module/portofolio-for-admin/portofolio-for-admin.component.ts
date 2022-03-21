import { Component, OnInit } from '@angular/core';
import { portfolioDTO } from 'src/app/models/portfolioDTO.model';
import { portfolioService } from 'src/app/portfolio.sevice';
import {MessageService} from 'primeng/api';
import { correntUserService } from 'src/app/correntUser.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatDialog} from '@angular/material/dialog'

import { EventEmitter } from '@angular/core';
import {LiveAnnouncer} from '@angular/cdk/a11y';

import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';




import { NewPortfolioComponent } from '../new-portfolio/new-portfolio.component';


@Component({
  selector: 'app-portofolio-for-admin',
  templateUrl: './portofolio-for-admin.component.html',
  styleUrls: ['./portfolio-for-admin.component.css'],
  providers: [MessageService]
 
})
export class PortofolioForAdminComponent implements OnInit {

  portfolio!:portfolioDTO[];
  selectedportfolio!: portfolioDTO;
  selectedportfolios!: portfolioDTO[];
  userId!:number;

  constructor(public dialog: MatDialog,private portfolioService:portfolioService , private messageService: MessageService,
    private router:Router,
    private route:ActivatedRoute
) {
  this.route.params.subscribe((params:Params) => {         
    this.userId = params['userId'];
  });
  }

  ngOnInit(): void {
 
    
    this.portfolioService.getPortfoliosOfUser(this.userId).subscribe(data=>this.portfolio=data)
  }
 
 
  portfolioFolder(portfolioTypeId:number,portfolioId:number){
   
    this.router.navigate(['/adminHome/portfolioFolder',portfolioTypeId,portfolioId])

   
  }  
selectPortfolio(portfolio: portfolioDTO) {
    this.messageService.add({severity:'info', summary:'Portfolio Selected', detail: portfolio.type});
}
columnsToDisplay: string[] = ['dateOfOpen', 'dedLine', 'userId', 'type','description'];
  dataSorce=this.portfolio;

  openDialog() {
    this.dialog.open(NewPortfolioComponent,{
      data:{id:this.userId}
    });  


  }
}








