import { Component, Inject, OnInit } from '@angular/core';
import {FormControl, Validators,FormGroup} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { portfolio } from 'src/app/models/portfolio.model';
import { portfolioType } from 'src/app/models/portfolioType.model';
import { User } from 'src/app/models/user.model';
import { portfolioService } from 'src/app/portfolio.sevice';

@Component({
  selector: 'app-new-portfolio',
  templateUrl: './new-portfolio.component.html',
  styleUrls: ['./new-portfolio.component.css']
})


export class NewPortfolioComponent implements OnInit {
  newPortfolio!:portfolio;
  now:Date=new Date();
  userId!:number;
  success:boolean=false;

  
  types:portfolioType [] = [
    {id: 1, name: 'אדריכלות'},
    {id: 2, name: 'עיצוב פנים'},
    {id: 3, name: 'התרי בניה'},
  ];
 newPortfolioForm!:FormGroup;
  constructor(private portfolioService:portfolioService, public dialogRef: MatDialogRef<NewPortfolioComponent>,
    @Inject(MAT_DIALOG_DATA)public data: any) {
     
    this.now= new Date(Date.now());
   }

  ngOnInit(): void {
   this.userId=this.data.id;
    console.log(this.userId);
    this.newPortfolioForm= new FormGroup({
      type: new FormControl(""),
      dedline: new FormControl("") 
    })
  }
 


  addPortfolio():void{
    let p=this.newPortfolioForm.value;
    this.portfolioService.addPortfolio(new portfolio(p.type,this.userId,new Date(Date.now()),p.dedline,2)) .subscribe(data=>{
      if(data){
        this.success=true;

      }
        });
   
  
  }


}








