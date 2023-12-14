import { PassportSerializer } from "@nestjs/passport";
import { Inject } from "@nestjs/common";
import { UsersService } from "src/users/services/users/users.service";
import { User } from "src/typeorm";

export class SessionSerializer extends PassportSerializer{
constructor(
    @Inject('USER_SERVICE') private readonly userService:UsersService,
){ super()}

serializeUser(user: User, done: (err: any, userId: number) => void) {
    console.log('serialize user', user);
    done(null, user.id);
}


async deserializeUser(userId: number, done: (err: any, user: User) => void) {
    console.log('deserialize user', userId);
    const userDb = await this.userService.findUserById(userId);
    return userDb ? done(null, userDb) : done(null, null);
}

}