import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SerializedUser, User } from 'src/users/types/Index';

@Injectable()
export class UsersService {
    private users:User[]=[
        {
            username:"andrey",
            password:"andrey",
        },
        {
            username:"danny",
            password:"danny",
        },
        {
            username:"stuart",
            password:"stuart",
        },
        {
            username:"roney",
            password:"roney",
        },
    ]

    getUsers(){
        // return this.users.map((user)=>plainToClass(SerializedUser,user))
        return this.users.map((user)=>new SerializedUser(user) )
    }

    getUserByUsername(username:string){
        return this.users.find((user)=>{
            return user.username === username
        })
    }
}
