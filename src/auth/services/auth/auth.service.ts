import { Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { comparePasswords } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {
    constructor(
        @Inject('USER_SERVICE') private readonly usersService:UsersService
    ){}
    
async validateUser(username:string, password:string){
    const userDb = await this.usersService.findUserByUsername(username)
    console.log('auth service job');
    
    if(userDb){
        const matched = await comparePasswords(password,userDb.password)
        if(matched){
            console.log('user validation succeed');     
            return userDb       
        }else{
            console.log('passwords do not match');
            return null
        }
    }
    return null
}
}
