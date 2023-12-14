import { Injectable, } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm'
import { User as UserEntity} from 'src/typeorm';
import { CreateUserDto } from 'src/users/dto/CreateUser';
import { SerializedUser, User } from 'src/users/types/Index';
import { encodePassword } from 'src/utils/bcrypt';
import {FindOneOptions, Repository} from 'typeorm'

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

    async getUsers(id:number,username:string){
        // return this.users.map((user)=>plainToClass(SerializedUser,user))
        // return this.users.map((user)=>new SerializedUser(user) )
        let uzer = await this.userRepository.find({where:{
            id,username
        }})
        return uzer.map((user)=>new SerializedUser(user))
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

    async createUser(createUserDto:CreateUserDto){
        const password =await encodePassword(createUserDto.password)
        console.log('password: ', password);
        
        const newUser =this.userRepository.create({...createUserDto,password})
        return this.userRepository.save(newUser)
    }

    findUserByUsername(username: string): Promise<UserEntity | undefined> {
        // const findOptions: FindOneOptions<UserEntity> = {
        //   where: {
        //     username: username,
        //   },
        // };
        console.log('findUserByUsername');
        
        return this.userRepository.findOne({where: { username:username} });
      }

      findUserById(id:number){
        console.log('findUserById');
        
        return this.userRepository.findOne({where:{id}})
      }
}
