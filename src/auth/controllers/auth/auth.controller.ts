import { Controller, Get, Req, Post, Session, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { LocalAuthGuard } from 'src/auth/utils/LocalGuard';

@Controller('auth')
export class AuthController {
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(){
        
    }


    @Get('')
    async getAuthSession(@Session() session:Record<string, any>)  {
        console.log(session);
        console.log(session.id);
        session.authenticated=true
        // session.test=false
        return session
        
    }

    @UseGuards(LocalAuthGuard)
    @Get('status')
    async getAuthStatus(@Req() req:Request){
        console.log(req.user);
        
        return req.user;
    }

}
 