import { ClassSerializerInterceptor, Controller, Get, 
    HttpException, HttpStatus, Inject, Param, UseInterceptors,ParseIntPipe } from '@nestjs/common';
import { UserNotFoundException } from 'src/users/exception/UserNotFoundException';
import { UsersService } from 'src/users/services/users/users.service';
import { SerializedUser } from 'src/users/types/Index';

@Controller('users')
export class UsersController {
    constructor(@Inject('USER_SERVICE') 
    private readonly userService:UsersService){}

    @UseInterceptors(ClassSerializerInterceptor)
    @Get()
    getUsers(){
        return this.userService.getUsers()
    }
    
    @UseInterceptors(ClassSerializerInterceptor)
    @Get(':username')
    getByUsername(@Param('username') username:string){
        const user = this.userService.getUserByUsername(username)
        if(user){
            return new SerializedUser(user)
        }else{
            throw new HttpException('user not found', HttpStatus.BAD_REQUEST)
        }
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get('id/:id')
    getByUserId(@Param('id', ParseIntPipe) id:number){
        console.log('getByUserId works');
        
        const user = this.userService.getUserById(id) 
        if(user)
          return new SerializedUser(user)
        else{
            throw new UserNotFoundException('user not found',HttpStatus.BAD_REQUEST)
        }
        
    }
}
