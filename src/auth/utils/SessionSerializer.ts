import { PassportSerializer } from "@nestjs/passport";
import { Inject } from "@nestjs/common";
import { UsersService } from "src/users/services/users/users.service";
import { User } from "src/typeorm";

export class SessionSerializer extends PassportSerializer{
constructor(
    @Inject('USER_SERVICE') private readonly userService:UsersService,
){ super()}

    serializeUser(user: User, done: (err:any,user:User)=>void) {
        console.log('serialize user');
        
        done(null,user)
    }

    async deserializeUser(user: User, done: (err,user:User)=>void) {
        console.log('deserialize user');
        const userDb= await this.userService.findUserById(user.id)
        return userDb ? done(null,userDb) : done(null, null)
    }
}