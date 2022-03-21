export class OutputDocument {
    constructor(
      public  id?: number,
      public  portfolioId?: number,
      public  url?: string, 
      public name?: string, 
      public  portfolioFolderId?: number, 
      public date?:Date, 
       public requiresApproval?:boolean
    ){}
   
}