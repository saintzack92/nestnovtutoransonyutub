import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CustomersController } from './controllers/customers/customers.controller';
import { CustomersService } from './services/customers/customers.service';
import { ValidateCustomerMiddleware } from './middleware/validate-customer.middleware';
import { ValidateCustomerAcccountMiddleware } from './middleware/validate-customer-account.middleware';
import { NextFunction, Request, Response } from 'express';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService]
})
export class CustomersModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
      consumer.apply(ValidateCustomerMiddleware,ValidateCustomerAcccountMiddleware,(req:Request,res:Response,next: NextFunction)=>{{
        console.log('last middleware')
        next();
        
      }})
      .forRoutes(
      //   {
      //   path:'/customers/search/:id',
      //   method:RequestMethod.GET
      // },
      //   {
      //   path:'/customers/:id',
      //   method:RequestMethod.GET
      // },
      CustomersController
      )
  }
}
