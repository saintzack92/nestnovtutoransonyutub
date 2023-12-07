import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SerializedUser, User } from 'src/users/types/Index';

@Injectable()
export class UsersService {
    private users:User[]=[
        {
            id:1,
            username:"andrey",
            password:"andrey",
        },
        {
            id:2,
            username:"danny",
            password:"danny",
        },
        {
            id:3,
            username:"stuart",
            password:"stuart",
        },
        {
            id:4,
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

    getUserById(id:number){
        return this.users.find(user=>{
            return user.id ===id
        })
    }
}
