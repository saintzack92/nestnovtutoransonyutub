import { Inject, Injectable,UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../services/auth/auth.service";


@Injectable()
export class LocalStategy extends PassportStrategy(Strategy){
    constructor(@Inject('AUTH_SERVICE') private readonly authService:AuthService){
        super({
            usernameField:'username'
        });
    }

    async validate(username:string, password:string){
        console.log('inside validate localstrategy');
        console.log('username is : ',username);
        console.log('password is : ',password);
        
        const user = await this.authService.validateUser(username,password)
        if (!user){
            console.log('no user');
            
            throw new UnauthorizedException ()
        }
        return user
    }
}