import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { PortfolioFolder } from "src/app/models/portfolioFolder.model";

import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
  })  
  export class portfolioFolderService{
  
  
  
  constructor(private _http:HttpClient) { }
  
    
    getPortfolioFolder(id: number|undefined):Observable<PortfolioFolder[]> {
      return this._http.get <PortfolioFolder[]>("/api/PortfolioFolder/"+id);
    }
  }