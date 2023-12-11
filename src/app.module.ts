import { Module } from '@nestjs/common';
import { TypeOrmModule} from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { UsersModule } from './users/users.module';
import entities, { User } from './typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    CustomersModule, 
    UsersModule,
    TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    port:3306,
    username:'root',
    password:'UINw580i!',
    database:'nesttutorialnov',
    entities:entities,
    synchronize:true,
  }),
    AuthModule],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule {}
