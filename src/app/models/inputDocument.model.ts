import { Data } from "@angular/router";

export class inputDocument {
    id!: number;
   portfolioId?: number; 
    url!: string; 
   dateOfSubmission!: Data;   
   submitted!: boolean; 
   DocumentTypeId!: number;   
}