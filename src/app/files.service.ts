import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { portfolioDTO } from "src/app/models/portfolioDTO.model";
import { Observable } from "rxjs";
import { OutputDocument } from "./models/outputDocument.model";


@Injectable({
    providedIn: 'root'
  })  
  export class filesService{
  
  
  
  constructor(private _http:HttpClient) { }
  
    
  GetOutputDocumentOfPortfolio(portfolioId: number,folderId:number):Observable<OutputDocument[]> {
      return this._http.get <OutputDocument[]>("/api/OutputDocument/"+portfolioId+"/"+folderId);
    }
  }