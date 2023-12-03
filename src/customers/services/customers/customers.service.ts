import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/dto/CreateCustomer.dto';
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
        name:"danny"
    },{
        id: 2,
        email:"sammy@getMaxListeners.com",
        name:"sammy"
    },{
        id: 3,
        email:"richard@getMaxListeners.com",
        name:"richard"
    },{
        id: 4,
        email:"sofya@getMaxListeners.com",
        name:"sofya"
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
