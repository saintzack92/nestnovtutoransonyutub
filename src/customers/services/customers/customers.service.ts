import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
    users = [{
        id: 1,
        email:"danny@getMaxListeners.com",
        cretedAt: new Date()
    },{
        id: 2,
        email:"sammy@getMaxListeners.com",
        cretedAt: new Date()
    },{
        id: 3,
        email:"richard@getMaxListeners.com",
        cretedAt: new Date()
    },{
        id: 4,
        email:"sofya@getMaxListeners.com",
        cretedAt: new Date()
    }]
    findCustomer(id:number){
        return this.users.find((user)=>{
            user.id === id
        })
    }
}
