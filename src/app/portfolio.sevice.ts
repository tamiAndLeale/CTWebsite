

import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { portfolioDTO } from "src/app/models/portfolioDTO.model";
import { Observable } from "rxjs";
import { portfolio } from "./models/portfolio.model";



@Injectable({
  providedIn: 'root'
})
export class portfolioService {

  viewTable: Boolean = false;

  constructor(private _http: HttpClient) { }

  getAllPortfolios():Observable<portfolio[]> {
      
    return this._http.get <portfolio[]>("/api/Portfolio/");

  }
  getPortfoliosOfUser(id: number): Observable<portfolioDTO[]> {
    return this._http.get<portfolioDTO[]>("/api/Portfolio/" + id);
  }
  addPortfolio(newPortfolio: portfolio): Observable<number> {
    return this._http.post<number>("/api/Portfolio/" , newPortfolio);
  }
}