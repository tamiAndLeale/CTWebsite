import { Component, OnInit, Output } from '@angular/core';
import { portfolioDTO } from 'src/app/models/portfolioDTO.model';
import { portfolioService } from 'src/app/portfolio.sevice';
import {MessageService} from 'primeng/api';
import { correntUserService } from 'src/app/correntUser.service';
import { Router } from '@angular/router';
import { MatDialog} from '@angular/material/dialog'
// import { EventEmitter } from 'stream';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-portofolio-component',
  templateUrl: './portofolio-component.component.html',
  styleUrls: ['./portfolio-component.css'],
  providers: [MessageService]
})
export class PortofolioComponent implements OnInit {
  
  portfolio!:portfolioDTO[];
  selectedportfolio!: portfolioDTO;
  selectedportfolios!: portfolioDTO[];

  @Output()
  onSelectPortfolio:EventEmitter<any>= new EventEmitter<any>();
  
  constructor(private portfolioService:portfolioService , private messageService: MessageService,private correntUserService :correntUserService,private router:Router) {
  }

  ngOnInit(): void {
 
    
    this.portfolioService.getPortfoliosOfUser(this.correntUserService.get_corrent_user().id).subscribe(data=>this.portfolio=data)
  }
 
 
  portfolioFolder(portfolioTypeId:number,portfolioId:number){
   
    this.router.navigate(['/userHome/portfolioFolder',portfolioTypeId,portfolioId])

   
  }  
// selectPortfolio(portfolio:portfolioDTO) {
//     this.messageService.add({severity:'info', summary:'Portfolio Selected', detail: portfolio.type});
// }
columnsToDisplay: string[] = ['dateOfOpen', 'dedLine', 'userId', 'type','description'];
  dataSorce=this.portfolio;

 }

