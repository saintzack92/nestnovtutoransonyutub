import { Injectable, } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm'
import { User as UserEntity} from 'src/typeorm';
import { CreateUserDto } from 'src/users/dto/CreateUser';
import { SerializedUser, User } from 'src/users/types/Index';
import {Repository} from 'typeorm'

@Injectable()
export class UsersService {
    constructor(@InjectRepository(UserEntity)
    private readonly userRepository:Repository<UserEntity>
    ){

    }
    private users:User[]=[
        // {
        //     id:1,
        //     username:"andrey",
        //     password:"andrey",
        // },
        // {
        //     id:2,
        //     username:"danny",
        //     password:"danny",
        // },
        // {
        //     id:3,
        //     username:"stuart",
        //     password:"stuart",
        // },
        // {
        //     id:4,
        //     username:"roney",
        //     password:"roney",
        // },
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

    createUser(createUserDto:CreateUserDto){
        const newUser =this.userRepository.create(createUserDto)
        return this.userRepository.save(newUser)
    }
}
