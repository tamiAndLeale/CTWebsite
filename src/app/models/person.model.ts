export class Person {
  
     id?: number;
     identity?: string;
      firstName?: string;
      lastName?: string;
      phone?: string;
      email?: string;
     country?: string;
     city?: string;
      street?: string;
      houseNumber?: number; 
      apartmentNumber?: number;
    constructor(
        id: number,
        identity?: string,
         firstName?: string,
         lastName?: string,
         phone?: string,
         email?: string,
        country?: string,
        city?: string,
         street?: string,
         houseNumber?: number,
         apartmentNumber?: number,
       
    ){
        this.id=id;
        this.identity=identity;
        this.firstName=firstName;
        this.lastName=lastName;
        this.phone=phone;
        this.email=email;
        this.country=country;
        this.city=city;
        this.street=street;
        this.houseNumber=houseNumber;
        this.apartmentNumber=apartmentNumber;



    }
    
}
