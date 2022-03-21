import { Data } from "@angular/router";

export class portfolio {
    constructor(
       
        public typeId?: number,
        public userId?: number,
        public dateOfOpen?: Date,
        public dedline?: Data,
        public portfolioTypeId?:number,
        public id?: number
        ){}
    
   
}