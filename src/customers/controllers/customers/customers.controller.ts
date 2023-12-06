import { Controller,Get,Param,ParseIntPipe,Req,Res,HttpException,HttpStatus, Post,Body,UsePipes,ValidationPipe} from '@nestjs/common';
import { Request, Response } from 'express';
import { CustomersService } from 'src/customers/services/customers/customers.service';
import { CreateCustomerDto } from 'src/dto/CreateCustomerDto.dto';

@Controller('customers')
export class CustomersController {
 constructor (private customersService:CustomersService){    
 }    
    @Get(':id')
    getCustomer(
        @Param('id',ParseIntPipe) id:number, 
        @Req() req:Request, 
        @Res() res:Response){
            
        const customer = this.customersService.findCustomeById(id)
        if(customer){
            console.log(customer);
            
            res.send(customer)
        }else{
            console.log('404');
            
            res.status(400).send({message:"cusotmer not found"})
        }        
    }

    @Get('search/:id')
    searchCustomerById(
        @Param('id',ParseIntPipe) id: number
    ){
        const customer =this.customersService.findCustomeById(id)
        if (customer){
            return customer
        }
        else throw new HttpException('Customer Not Found',HttpStatus.BAD_REQUEST)
    }
    @Get()
    getAllCustomer(){
        return this.customersService.getAllCustomer()
    }

    @Post('create')
    @UsePipes(ValidationPipe)
    createCustomer(@Body() createCustomerDto:CreateCustomerDto, @Res() res:Response){
        console.log(createCustomerDto);
        
        this.customersService.createCustomer(createCustomerDto)
        if(createCustomerDto){
            res.status(HttpStatus.CREATED).send({message:`customer ${createCustomerDto.name} created successfully`})
        }
        
    }
    

}
