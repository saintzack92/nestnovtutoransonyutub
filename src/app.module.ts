import { Module } from '@nestjs/common';
import { TypeOrmModule} from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { UsersModule } from './users/users.module';
import entities, { User } from './typeorm';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    CustomersModule, 
    UsersModule,
    TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    port:3306,
    username:'root',
    password:'P@ssw0rd009!',
    database:'nesttutorialnov',
    entities:entities,
    synchronize:true,
  }),
    AuthModule,
    PassportModule.register({
      session:true
    })
  ],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule {}
