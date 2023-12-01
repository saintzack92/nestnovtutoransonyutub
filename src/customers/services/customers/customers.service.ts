import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
    findCustomer(){
        return{
            id: 1,
            email:"danny@getMaxListeners.com",
            cretedAt: new Date()
        }
    }
}
