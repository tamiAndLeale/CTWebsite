import { Data } from "@angular/router";

export class portfolioDTO {
    constructor(
        public id?: number,
        public  type?: string,
        public userId?: number,
        public dateOfOpen?: Date,
        public dedline?: Data,
        public description?: string,
        public portfolioTypeId?:number){}
    
   
}