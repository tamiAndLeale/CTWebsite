export class User {
  
     
    constructor(
       public  id: number=0,
       public personId: number=0,
       public identity?: string,
       public  firstName?: string,
       public  lastName?: string,
       public  phone?: string,
       public  email?: string,
       public country?: string, 
       public city?: string,
       public  street?: string,
       public  houseNumber?: number, 
       public  apartmentNumber?: number,
       public  userName?: string,
       public  password?: string,
       public isManager?: boolean,
    ){}
    
}
