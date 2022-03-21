import { Component, OnDestroy, OnInit } from '@angular/core';
import { PortfolioFolder } from 'src/app/models/portfolioFolder.model';
import { portfolioFolderService } from 'src/app/portfolioFolder.service';
import { portfolioDTO } from 'src/app/models/portfolioDTO.model';
import { portfolioService } from 'src/app/portfolio.sevice';
import {MessageService} from 'primeng/api';
import { correntUserService } from 'src/app/correntUser.service';
import { Subscription } from 'rxjs';
import { Router,ActivatedRoute,Params } from '@angular/router';
import {MenuItem} from 'primeng/api';
import { tmpData } from 'src/app/models/tmpData.model';

@Component({
  selector: 'app-portfolio-folder',
  templateUrl: './portfolio-folder.component.html',
  styleUrls: ['./portfolio-folder.component.css'],
  providers: [MessageService]
})


export class PortfolioFolderAdminComponent implements OnInit {
    
  PortfolioFolder?:PortfolioFolder[];
  subscription?:Subscription ;
  portfolioTypeId?:number;
  portfolioId?:number;
  items?: MenuItem[];
  portfolioData!: tmpData;


  constructor(private portfolioService:portfolioService ,
             private portfolioFolderService:portfolioFolderService ,
             private messageService: MessageService,
             private correntUserService :correntUserService,
             private route:ActivatedRoute,
             private router:Router) {   
              this.route.params.subscribe((params:Params) => {
            
                this.portfolioTypeId = params['portfolioTypeId'];
               this.portfolioId = params['portfolioId'];
              });}
 

  ngOnInit(): void {
  
   this.portfolioFolderService.getPortfolioFolder(this.portfolioTypeId).subscribe(data=>this.PortfolioFolder=data);
   
} 
// selectFolder(portfolioId:number,folderId:number){
//   this.router.navigate(['/userHome/files',portfolioId,folderId])
// }
   
}





