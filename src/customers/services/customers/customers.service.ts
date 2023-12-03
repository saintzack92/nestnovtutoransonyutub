import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/dto/CreateCustomerDto.dto';
type createCustomer={
    id:number
    name:string
    email: string
}
@Injectable()
export class CustomersService {
   private customers:CreateCustomerDto[] = [{
        id: 1,
        email:"danny@getMaxListeners.com",
        name:"danny",
        address:{
            line1:"asd",
            zipCode:123,
            city:"ciiity",
            state:"asdads"
        }
    },{
        id: 2,
        email:"sammy@getMaxListeners.com",
        name:"sammy",
        address:{
            line1:"asd",
            zipCode:123,
            city:"ciiity",
            state:"asdads"
        }
    },{
        id: 3,
        email:"richard@getMaxListeners.com",
        name:"richard",
        address:{
            line1:"asd",
            zipCode:123,
            city:"ciiity",
            state:"asdads"
        }
    },{
        id: 4,
        email:"sofya@getMaxListeners.com",
        name:"sofya",
        address:{
            line1:"asd",
            zipCode:123,
            city:"ciiity",
            state:"asdads"
        }
    }]
    findCustomeById(id:number){
        return this.customers.find((user) => {
            return (user.id === id)
        });
    }
    createCustomer(customerDto:CreateCustomerDto){
        
        this.customers.push(customerDto)
    }
    
    getAllCustomer(){
        return this.customers   
    }
}
